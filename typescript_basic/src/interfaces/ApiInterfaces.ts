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

interface Person {
    name: string;
    age: number;
    address: string;
    dob: Date;
}

export {
    Post,
    Comment,
    User,
    Person
}