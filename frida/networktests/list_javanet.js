// Java.perform(function() {
//     var URLConnection = Java.use("java.net.HttpURLConnection");

//     URLConnection.getOutputStream.implementation = function() {
//         var result = this.getOutputStream();
//         console.log("HTTP request made to: " + this.getURL());
//         return result;
//     };

//     URLConnection.getInputStream.implementation = function() {
//         var result = this.getInputStream();
//         console.log("Response received from: " + this.getURL());
//         return result;
//     };
// });

Java.perform(function() {
    var URLConnection = Java.use("java.net.HttpURLConnection");

    URLConnection.connect.implementation = function() {
        console.log("Connecting to: " + this.getURL());
        return this.connect();
    };

    URLConnection.getOutputStream.implementation = function() {
        var result = this.getOutputStream();
        console.log("Sending request to: " + this.getURL());
        return result;
    };

    URLConnection.getInputStream.implementation = function() {
        var result = this.getInputStream();
        console.log("Receiving response from: " + this.getURL());
        return result;
    };
});