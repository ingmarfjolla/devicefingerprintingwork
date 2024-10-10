'use strict';
///chatgpt
function process_request(request) {
    var request_msg = {
        request: request.toString(),
        method: request.method().toString(),
        url: request.url().toString(),
        headers: request.headers().toString().split('\n').filter(Boolean),
        errors: [],
    };
    var requestBody = request.body();
    var requestContentLength = requestBody ? requestBody.contentLength() : 0;
    if (requestContentLength >= 0) {
        request_msg.length = requestContentLength;
    }
    if (requestContentLength === 0) {
        return request_msg;
    }
    var Buffer = Java.use("okio.Buffer");
    var buffer = Buffer.$new();
    try {
        requestBody.writeTo(buffer);
    } catch (error) {
        request_msg.errors = request_msg.errors.concat({
            message: error,
            place: "Write buffer body",
        });
    }

    var Utf8Kt = Java.use('okhttp3.logging.Utf8Kt');
    if (Utf8Kt.isProbablyUtf8(buffer)) {
        try {
            request_msg.body = buffer.readUtf8();
        } catch (error) {
            request_msg.errors = request_msg.errors.concat({
                message: error,
                place: "Decoding UTF-8",
            });
        }
    } else {
        try {
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            request_msg.bodyByteArrayHex = ByteString.of(buffer.readByteArray()).hex();
        } catch (error) {
            request_msg.errors = request_msg.errors.concat({
                message: error,
                place: "Reading ByteArray as hex",
            });
        }
    }
    return request_msg;
}

function process_response(response) {
    var response_msg = {
        response: response.toString(),
        protocol: response.protocol().toString(),
        code: response.code().toString(),
        message: response.message().toString(),
        headers: response.headers().toString().split('\n').filter(Boolean),
        errors: [],
    };
    var responseBody = response.body();
    var responseContentLength = responseBody ? responseBody.contentLength() : 0;
    if (responseContentLength >= 0) {
        response_msg.length = responseContentLength;
    }
    if (responseContentLength === 0) {
        return response_msg;
    }
    var source = responseBody.source();
    var content_encoding = response.headers().get("Content-Encoding");
    var buffer;
    if (content_encoding == "gzip") {
        var GzipSource = Java.use('okio.GzipSource');
        var Buffer = Java.use("okio.Buffer");
        buffer = Buffer.$new();
        try {
            var gzipSourceObj = GzipSource.$new(source);
            buffer.writeAll(gzipSourceObj);
        } catch (error) {
            response_msg.errors = response_msg.errors.concat({
                message: error,
                place: "Ungzip",
            });
        }
    } else {
        buffer = source.getBuffer();
    }
    var Utf8Kt = Java.use('okhttp3.logging.Utf8Kt');
    if (Utf8Kt.isProbablyUtf8(buffer)) {
        try {
            response_msg.body = source.readUtf8();
        } catch (error) {
            response_msg.errors = response_msg.errors.concat({
                message: error,
                place: "Decoding UTF-8",
            });
        }
    } else {
        try {
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            response_msg.bodyByteArrayHex = ByteString.of(source.readByteArray()).hex();
        } catch (error) {
            response_msg.errors = response_msg.errors.concat({
                message: error,
                place: "Reading ByteArray as hex",
            });
        }
    }
    return response_msg;
}

function hook_okhttp_com_android(output_func) {
    var OkHttpClient = Java.use("com.android.okhttp.OkHttpClient");
    var Request = Java.use("com.android.okhttp.Request");
    var Response = Java.use("com.android.okhttp.Response");

    OkHttpClient.newCall.overload('com.android.okhttp.Request').implementation = function(req) {
        var request_msg = process_request(req);
        var result = this.newCall(req);
        output_func({ request: request_msg });
        return result;
    };

    Response.body.overload().implementation = function() {
        var result = this.body();
        var response_msg = process_response(this);
        output_func({ response: response_msg });
        return result;
    };
}

function format_output(input, format = "json", raw = false) {
    var msg;
    if (format == "text") {
        msg = new TEXT(raw).stringify(input);
    } else {
        msg = JSON.stringify(input);
    }
    if ((input.request && input.request.errors.length > 0) || (input.response && input.response.errors.length > 0)) {
        console.warn(msg);
    } else {
        console.log(msg);
    }
}

rpc.exports = {
    init: function(stage, parameters) {
        var output_func = function(input) {
            format_output(input, parameters.format, parameters.raw);
        };

        // Wait until Java is available and hook okhttp methods
        let interval = setInterval(function() {
            if (Java.available) {
                clearInterval(interval);
                Java.perform(function() {
                    hook_okhttp_com_android(output_func);
                });
            }
        }, 1);
    },
};