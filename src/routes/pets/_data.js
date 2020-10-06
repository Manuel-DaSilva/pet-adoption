import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export let pets = [
    { id: '1', name: "Buddy", age: 5, description: lorem.generateParagraphs(3) },
    { id: '1', name: "Sebastian", age: 14, description: lorem.generateParagraphs(3) },
    { id: '1', name: "Martha", age: 10, description: lorem.generateParagraphs(3) },
    { id: '1', name: "Rocko", age: 7, description: lorem.generateParagraphs(3) },
];
