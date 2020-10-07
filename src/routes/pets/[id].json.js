import { pets } from './_data';

export function get(req, res, next) {
    const { id } = req.params;

    const pet = pets.find(pet => pet.id === id);

    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(pet));
}
