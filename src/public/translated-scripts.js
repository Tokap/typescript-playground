function doTheThing(text) {
    alert(text);
}
window.document.addEventListener('DOMContentLoaded', function () {
    var displayFormButton = document.getElementById('button-trigger');
    if (displayFormButton != null) {
        displayFormButton.addEventListener('click', function (event) { return doTheThing('This worked!'); });
    }
});
//# sourceMappingURL=translated-scripts.js.map