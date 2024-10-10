//https://gist.github.com/tiiime/e8ec790bdf3ab0e71c0f4a96bb940e62

Java.perform(function () {
    var OkHttpClient = Java.use("com.android.okhttp.OkHttpClient");
    //var RealCall = Java.use("com.android.okhttp.RealCall");

    OkHttpClient.newCall.implementation = function (request) {
        var result = this.newCall(request)
        console.log(request.toString())
        return result
    };

    // RealCall.getResponseWithInterceptorChain.implementation = function () {
    //     var response = this.getResponseWithInterceptorChain()
    //     console.log(response.toString())
    //     return response
    // }
});

// Java.perform(function() {

//     var OkHttpClient = Java.use('com.android.okhttp.OkHttpClient');
//     var Request = Java.use('com.android.okhttp.Request');
//     var Response = Java.use('com.android.okhttp.Response');

//     OkHttpClient.newCall.overload('com.android.okhttp.Request').implementation = function(req) {
//         console.log("HTTP request initiated:");
//         console.log("URL: " + req.url().toString());


//         var headers = req.headers();
//         for (var i = 0; i < headers.size(); i++) {
//             console.log(headers.name(i) + ": " + headers.value(i));
//         }

//         return this.newCall(req);
//     };


//     Response.body.overload().implementation = function() {
//         var body = this.body();
//         console.log("HTTP response received: " + body.string());
//         return body;
//     };
// });