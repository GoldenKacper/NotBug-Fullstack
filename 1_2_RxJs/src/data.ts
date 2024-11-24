export interface Person {
    id: number;
    name: string;
}

export interface Age {
    person: number;
    age: number;
}

export interface Location {
    person: number;
    country: string;
}

export const persons: Person[] = [
    { id: 1, name: "Jan Kowalski" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "Jarek Kaczka" }
];

export const ages: Age[] = [
    { person: 1, age: 18 },
    { person: 2, age: 24 },
    { person: 3, age: 666 }
];

export const locations: Location[] = [
    { person: 1, country: "Poland" },
    { person: 3, country: "Poland" }
];
