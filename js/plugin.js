//---------------------------------------THIS----------------------------
// // Задание 1
// const rectangle = {
//     width: 10,
//     height: 15,
//     getSquare: getSquare
// };
// function getSquare() {
//     return this.width * this.height;
// }
// console.log(rectangle.getSquare());

// // Задание 2
// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: getPrice,
//     getPriceWithDiscount: getPriceWithDiscount
// };
// function getPrice() {
//     return `Цена без скидки = ${this.price}`;
// }
// function getPriceWithDiscount() {
//     return `Цена с учетом скидки = ${this.price * (100 - parseFloat(this.discount)) / 100}`;
// }
// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

// // Задание 3
// const user = {name: 'Abraham'};
// getUserName = function () {
//     return user.name
// };
// console.log(getUserName());

// // Задание 4
// let obj = {height: 10};
// getMoreOne = function () {
//   return obj.height + 1;
// };
//
// console.log(getMoreOne());

// // Задание 5
// const numerator = {
//     value: 1,
//     double: function () {
//         return this.value * 2
//     },
//     plusOne: function () {
//         return this.value + 1
//     },
//     minusOne: function () {
//         return this.value - 1
//     }
// };
// console.log(`Функция удвоения дает результат ${numerator.double()}`);
// console.log(`Функция +1 дает результат ${numerator.plusOne()}`);
// console.log(`Функция -1 дает результат ${numerator.minusOne()}`);
//
// console.log(numerator.double() + numerator.plusOne() + numerator.minusOne());

// // Задание 6
// const user = {name: 'Abraham'},
//     otherUser = {name: 'John',
//     getName: function () {
//         return this.name
//     }
// };
// console.log(otherUser.getName());

//-------------------Part 2-------------
// // Задание 1
// function getList() {
//     return this.list
// }
// let users = {
//     lenght: 4,
//     list: ['Abraham', 'James', 'John', 'Steven']
// };
// console.log(getList()); /* undefined */
// users.getList = getList;
// console.log(users.getList()); /* массив из имен */
// console.log(getList.call(users)); /* массив из имен */

// // Задание 2
// let object = {
//     price: 10,
//     quantity: 5,
//     getMultiply: getMultiply
// };
// function getMultiply() {
//     return this.price * this.quantity
// }
// console.log(object.getMultiply());

// // Задание 3
// let object = {
//     price: 10,
//     quantity: 5,
//     getMultiply: getMultiply
// };
// function getMultiply() {
//     return this.price * this.quantity
// }
// // console.log(object.getMultiply());
//
// let object2 = {
//     price: 15,
//     quantity: 10,
//     getMultiply: getMultiply
// };
// console.log(object2.getMultiply());

// // Задание 4
// let sizes = {width: 5, height: 10};
// var getSquare = function () {
//     return this.width * this.height
// };
// console.log(getSquare.call(sizes));

// // Задание 5
// let numbers = [4, 12, 0, 10, -2, 4];
// var res = Math.min.apply(null, numbers);
// console.log(res);

// // Задание 6
// const element = {
//     height: '15px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     getFullHeight: function () {
//         return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom)
//     }
// };
// console.log(element.getFullHeight());
//
// const block = {
//     height: '5px',
//     marginTop: '3px',
//     marginBottom: '3px'
// };
// block.getFullHeight = element.getFullHeight;
// console.log(block.getFullHeight());

// Задание 7
let element = {
    height: 25,
    getHeight: function () {
        return this.height
    }
};

let getElementHeight = element.getHeight;
console.log(getElementHeight.call(element));