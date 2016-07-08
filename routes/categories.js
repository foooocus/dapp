var categories = [
 {
   "id": 1,
   "name": "Apartment",
   "img": "apartment.jpg"
 },
 {
   "id": 2,
   "name": "Community",
   "img": "community.jpg"
 },
 {
   "id": 3,
   "name": "Restaurant",
   "img": "restaurant.jpg"
 },
 {
   "id": 4,
   "name": "Baker",
   "img": "baker.jpg"
 },
 {
   "id": 5,
   "name": "Grooming",
   "img": "grooming.jpg"
 },
 {
   "id": 6,
   "name": "Classes",
   "img": "classes.jpg"
 },
 {
   "id": 7,
   "name": "Clothing",
   "img": "clothing.jpg"
 },
 {
   "id": 8,
   "name": "Grocery",
   "img": "grocery.jpg"
 },
 {
   "id": 9,
   "name": "Realtor",
   "img": "realtor.jpg"
 },
 {
   "id": 10,
   "name": "Health",
   "img": "health.jpg"
 },
 {
   "id": 11,
   "name": "Misc",
   "img": "misc.jpg"
 },
 {
   "id": 12,
   "name": "Photography",
   "img": "photography.jpg"
 },
 {
   "id": 13,
   "name": "Food",
   "img": "food.jpg"
 }
];

exports.getCategories = function(req, res, next) {
    res.send(categories);
};