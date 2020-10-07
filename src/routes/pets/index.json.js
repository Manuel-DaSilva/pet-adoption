import { pets } from './_data.js';
import { v4 as uuidv4 } from 'uuid';

export function get(req, res, next) {
    
    res.end(JSON.stringify(pets));
}

export function post(req, res, next) {

    const { name, age, description } = req.body;
    const id = uuidv4();

    pets.push({ name, age, description, id});

    res.end(JSON.stringify(pets));
}
