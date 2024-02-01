// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = username+  "Hello to you 1";
unsafe_div.innerHTML = username+  "Hello to you 2";

console.log('hello')

