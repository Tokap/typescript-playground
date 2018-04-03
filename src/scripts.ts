// - Generic Helper
function doTheThing(text: string) {
    alert(text)
}

// --- Event Listeners
window.document.addEventListener('DOMContentLoaded', function () {
    // Add listener for displaying hidden form on button press
    var displayFormButton = document.getElementById('button-trigger')

    if (displayFormButton != null) {
        displayFormButton.addEventListener(
            'click',
            // The use of bind removes the type safety. Frown.
            // doTheThing.bind(null, 'This worked!')
            (event) => doTheThing('This worked!')
        )
    }
})