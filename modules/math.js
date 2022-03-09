// Functions ları tanımlayıp, export yapıyoruz
const add = (x, y) => x + y;
const square = (x) => x * 2;
const PI = 3.1415;

// Obje oluşturup,obje olarak export------------------------
const math = {
    add: add,
    square: square,
    PI: PI,
};

module.exports = math;

//tek tek export------------------
// module.exports.add = add;
// module.exports.square = square;
// module.exports.PI = PI;