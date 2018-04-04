var baseUrl = 'https://jsonplaceholder.typicode.com/';
var postSlug = 'posts/1';
function doTheThing(text) {
    alert(text);
}
function constructUrl(base, slug) {
    return "" + baseUrl + postSlug;
}
function callTestApi(event) {
    var url = constructUrl(baseUrl, postSlug);
    fetch('/getApi/comments')
        .then(function (rez) { return rez.json(); })
        .then(function (jsonRez) { return jsonRez.body; })
        .then(console.log)["catch"](function (err) { return console.error('Error When Retreiving Data: ', err); });
}
window.document.addEventListener('DOMContentLoaded', function () {
    var displayFormButton = document.getElementById('button-trigger');
    if (displayFormButton != null) {
        displayFormButton.addEventListener('click', callTestApi);
    }
});
//# sourceMappingURL=translated-scripts.js.map