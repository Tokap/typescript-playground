// - Sub-Interfaces
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// - Core-Interfaces
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// - Api Url
const baseUrl = 'https://jsonplaceholder.typicode.com/'
const postSlug = 'posts/1'

// - Test Functions
function doTheThing(text: string) {
    alert(text);
}

function constructUrl (base: string, slug: string): string {
    return `${baseUrl}${postSlug}`;
}

function callTestApi (event: Event) {
    const url: string = constructUrl(baseUrl, postSlug);

    fetch('/getApi/comments')
    .then(rez => rez.json())
    .then(jsonRez => jsonRez.body)
    .then(console.log)
    .catch(err => console.error('Error When Retreiving Data: ', err))
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
            // (event: Event) => doTheThing('This worked!')
            callTestApi
        )
    }
})