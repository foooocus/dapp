var categories = [
{"id": 15, name: 'Food', img: 'food.jpeg'},
{"id": 16, name: 'Games', img: 'games.jpg'},
{"id": 117, name: 'Flowers', img: 'food.jpeg'},
{"id": 18, name: 'Cars', img: 'cars.png'},
{"id": 19, name: 'Computers', img: 'computers.png'},
{"id": 20, name: 'Countries',img: 'countries.png'},
{"id": 21, name: 'Cities', img: 'cities.png'},
{"id": 22, name: 'Phones', img: 'phone.png'},
{"id": 23, name: 'Tools', img: 'tools.png'},
{"id": 24, name: 'Prisons', img: 'cars.png'},
{"id": 27, name: 'Drinks', img: 'cars.png'}
];
exports.getCategories = function(req, res, next) {
    res.send(categories);
};