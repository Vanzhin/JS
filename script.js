"use strict";
//<!-- задание 1 -->
//let Tc = 20;
//let Tf = ((9 / 5) * Tc + 32);
//alert (Tf);
//<!-- задание 2 -->
//let name;
//let admin;
//name = "Василий";
//admin = name;
//alert (admin);
//<!-- задание 3 -->
//admin = 1000 + "108";
//alert (admin);

// < !--HomeWork 2 -- >
// < !--ex1 -->
//     alert("Задание 1, 2 - см. комментраний script.js");

// //var a = 1, b = 1, c, d;
// //c = ++a; alert(c);           // 2 т.к. с присваивается значение а с префиксной формой инкрементирования, где инкрементирование производится сразу и выводится с измененным значением.
// //d = b++; alert(d);           // 1 т.к. d  присваивается значение b с постфиксной формой инкрементирования. сначала происходит возврат значения,  затем инкрементирование.
// //c = (2+ ++a); alert(c);      // 5 т.к. сначала производится инкрементирование а = 2+1, затем операция сложения 2+3=5
// //d = (2+ b++); alert(d);      // 4 т.к. происходит возврат значения b=2, затем сложение 2+2 =4, вывод значениея, затем инкрементирование.
// //alert(a);                    // 3 инекрементирование произошло дважды в строках, где задавалось значение с
// //alert(b);                    // 3 инекрементирование произошло дважды в строках, где задавалось значение d

// < !--ex2 -->
// //var a = 2;
// //var x = 1 + (a *= 2); ответ 5. снасала производятся действвия в скобках, а =а*2, затем операция сложения = 1+2*2=5

// < !--ex3 -->
// alert("Задание 3");
// let a = prompt("укажите число");
// while (true) {
//     if (isNaN(a) || a === "") {
//         alert("необходимо ввести число");
//         a = prompt("укажите число");
//     }
//     else break;
// }
// let b = prompt("укажите второе число");
// while (true) {
//     if (isNaN(b) || b === "") {
//         alert("необходимо ввести число");
//         b = prompt("укажите второе число");
//     }
//     else break;
// }
// if (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else {
//     alert(a + b);
// }

// < !--ex4 -->
//     alert("Задание 4");
// let c = Math.floor(Math.random() * 16);
// switch (c) {
//     case 0:
//         alert("0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 1:
//         alert("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 2:
//         alert("2,3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 3:
//         alert("3,4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 4:
//         alert("4,5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 5:
//         alert("5,6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 6:
//         alert("6,7,8,9,10,11,12,13,14,15");
//         break;
//     case 7:
//         alert("7,8,9,10,11,12,13,14,15");
//         break;
//     case 8:
//         alert("8,9,10,11,12,13,14,15");
//         break;
//     case 9:
//         alert("9,10,11,12,13,14,15");
//         break;
//     case 10:
//         alert("10,11,12,13,14,15");
//         break;
//     case 11:
//         alert("11,12,13,14,15");
//         break;
//     case 11:
//         alert("11,12,13,14,15");
//         break;
//     case 12:
//         alert("12,13,14,15");
//         break;
//     case 13:
//         alert("13,14,15");
//         break;
//     case 14:
//         alert("14,15");
//         break;
//     default:
//         alert("15");
// }

// < !--ex5-- >
// alert("Задание 5");
// let d = parseInt(prompt("введите первое число"));
// let f = parseInt(prompt("введите второе число"));


// function summ(d, f) {
//     let e = d + f;
//     return e;
// }

// function subtraction(d, f) {
//     let e = d - f;
//     return e;
// }

// function multiply(d, f) {
//     let e = d * f;
//     return e;
// }

// function division(d, f) {
//     let e = d / f;
//     return e;
// }

// alert("сумма чисел равна " + summ(d, f));
// subtraction(d, f);
// alert("разность чисел равна " + subtraction(d, f));
// multiply(d, f);
// alert("умножение чисел равно: " + multiply(d, f));
// division(d, f);
// alert("деление первого на второе число: " + division(d, f));

// < !--ex6-- >
//     alert("Задание 6");
// let arg1 = parseInt(prompt("введите первое число"));
// let arg2 = parseInt(prompt("введите второе число"));
// let operation = prompt("укажите одну операцию в формате: +, -, *, /");
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "+":
//             summ(arg1, arg2);
//             e = "сумма чисел равна " + e;
//             break;
//         case "-":
//             subtraction(arg1, arg2);
//             e = "разность чисел равна " + e;
//             break;
//         case "*":
//             multiply(arg1, arg2);
//             e = "умножение чисел равно " + e;
//             break;

//         case "/":
//             division(arg1, arg2);
//             e = "деление первого на второе число: " + e;
//             break;
//         default:
//             e = "что-то пошло не так";
//     }

// }
// mathOperation(arg1, arg2, operation);
// alert(e);

// < !--ex7-- >
//     alert("Задание 7");
// let a7 = null;
// let b7 = 0;

// alert(a7 + " < " + b7 + " : " + Boolean(a7 < b7) + "\n" + a7 + " > " + b7 + " : " + Boolean(a7 > b7) + "\n" + a7 + " >= " + b7 + " : " + Boolean(a7 >= b7) + "\n" + a7 + " <= " + b7 + " : " + Boolean(a7 <= b7) + "\n" + a7 + " == " + b7 + " : " + Boolean(a7 == b7) + "\n" + a7 + " === " + b7 + " : " + Boolean(a7 === b7) + " прочитав несколько статей на эту тему, понял, что null  - отсутствие значения, а 0 - это число, а есть также разная логика сравнения при разных операторах сравнения");



// < !--ex8-- >
//     alert("Задание 8");

// function power(val, pow) {
//     if (pow === 0) {
//         return current;
//     }
//     else if (n + 1 <= pow && pow > 0) {
//         current *= val;
//         n++;
//         power(val, pow);
//         return current;
//     }
//     else if (n + 1 <= Math.abs(pow) && pow < 0) {
//         current /= val;
//         n++;
//         power(val, pow);
//         return current;
//     }
// }
// let val = parseInt(prompt("введите число"));
// let pow = parseInt(prompt("введите степень возведения"));
// let n = 0;
// let current = 1;
// power(val, pow);
// alert(`число ${val} в степени ${pow} равно ${current}`);

// < !--HomeWork 3 -- >
// < !--ex1 -->

// let digit = 100;
// let digits = [];
// let i = 1;

// nextPrime:
//     while (i < digit) {
//         i++;
//         let j = 2;
//         while (j < i) {
//             if (i % j == 0) {
//                 continue nextPrime;
//             }
//             j++;
//         }
//         digits.push(i);
//     }
// alert(`Простые числа от 0 до ${digit}: ${digits}`);

// // < !--ex2 -->

// let cart = [
//     { art: 1, itemName: "T-shirt", brandName: "Mango", price: 150, quantity: 2 },
//     { art: 2, itemName: "T-shirt", brandName: "Mango", price: 100, quantity: 2 },
//     { art: 3, itemName: "T-shirt", brandName: "Mango", price: 75, quantity: 2 },
//     { art: 4, itemName: "T-shirt", brandName: "Mango", price: 50, quantity: 2 },
//     { art: 5, itemName: "T-shirt", brandName: "Mango", price: 50, quantity: 2 }

// ];
// function countBasketPrice(n) {
//     let currentTotalPrice = 0;
//     n = cart.length;
//     for (let i = 0; i <= cart.length - 1; i++) {
//         let itemPrice = cart[i].price * cart[i].quantity;
//         currentTotalPrice += itemPrice;
//     }
//     return currentTotalPrice;
// }
// let totalPrice = countBasketPrice(cart.length);
// alert(`Итоговая сумма: ${totalPrice}`);

// // < !--ex3 -->

// for (let i = 0; i < 10; alert(i++)) {

// }
//     // < !--ex4 -->
//     let star = "*";
//     for (let i = 0; i < 20; i++) {
//         console.log(star);
//         star += "*";
//     }

// test

// const numbers = [1, 2, 3];
// const doubles = numbers.map(function (num) {
//     return num * num;
// });
// console.log(doubles);

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic' },
//     { name: 'Zeros', value: 37 }
// ];
// items.sort(function (a, b) {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a должно быть равным b
//     return 0;
// });
// console.log(items);


// < !--HomeWork 4 -- >
// < !--ex1 -->


// let n = Math.floor((Math.random() * 2000), 0);
// console.log(n);
// function getObject(n) {
//     if (n > 999) {
//         console.log("число превышает 999");
//         return {};
//     }
//     let hund = Math.floor((n / 100));
//     let dec = Math.floor((n - hund * 100) / 10);
//     let one = Math.floor(n - hund * 100 - dec * 10);
//     const numbers = {
//         единицы: one,
//         десятки: dec,
//         сотни: hund
//     }
//     return (numbers);


// }
// console.log(getObject(n));

// // < !--ex2 -->
// function Product(art, itemName, desc, price, brandName) {
//     this.art = art;
//     this.itemName = itemName;
//     this.desc = desc;
//     this.price = price;
//     this.brandName = brandName;
// };

// let additionalInfo = {
//     score: 5,

// };

// Product.prototype = additionalInfo;

// let products = [
//     new Product(1, `t - shirt`, `goods description1`, 100, `mango`),
//     new Product(2, `t - shirt`, `goods description2`, 120, `levis`),
//     new Product(3, `t - shirt`, `goods description3`, 130, `GJ`),
//     new Product(4, `t - shirt`, `goods description4`, 150, `adidas`),
//     new Product(5, `t - shirt`, `goods description5`, 200, `nike`),
// ];
// console.log(products);

// function BasketItem(art, itemName, price, quantity) {
//     this.art = art;
//     this.itemName = itemName;
//     this.price = price;
//     this.quantity = quantity;
//     this.makeDiscount = function (discount) {
//         this.price = this.price * (100 - discount) / 100;
//     }

// }
// let basket = [
//     new BasketItem(products[0].art, products[0].itemName, products[0].price, 2),
//     new BasketItem(products[2].art, products[2].itemName, products[2].price, 3),
//     new BasketItem(products[3].art, products[3].itemName, products[3].price, 10)
// ]
// for (let newPrice of basket) {
//     newPrice.makeDiscount(10);
// }
// function totalBasketPrice(basketArr) {
//     let currenttotalPrice = 0;
//     for (let i = 0; i <= basketArr.length - 1; i++) {
//         let totalPrice = basketArr[i].price * basketArr[i].quantity;
//         currenttotalPrice += totalPrice;

//     }
//     return currenttotalPrice;

// }
// console.log(basket)

// console.log(`стоимость корзины v1: ${totalBasketPrice(basket)}`);

// // еще вариант

// const basketV2 = {
//     item1: {
//         art: 1, itemName: `t-shirt`, desc: `description1`, price: 100, brandName: `mango`, quantity: 2
//     },
//     item2: {
//         art: 2, itemName: `t-shirt`, desc: `description2`, price: 150, brandName: `adidas`, quantity: 1
//     },
//     item3: {
//         art: 3, itemName: `t-shirt`, desc: `description3`, price: 200, brandName: `dior`, quantity: 3
//     },
//     totalBasketPrice() {
//         let p = this.item1.price * this.item1.quantity + this.item2.price * this.item2.quantity + this.item3.price * this.item3.quantity;
//         return p;
//     }
// }
// console.log(`стоимость корзины v2: ${basketV2.totalBasketPrice()}`);



// < !--HomeWork 5 -- >
// < !--ex 5-1 -->

// function setChessTable() { //создаю тэг таблицы
//     let chessDiv = document.querySelector(".chess");
//     let table = document.createElement("table");
//     chessDiv.appendChild(table);
//     table.style.borderCollapse = "collapse";
//     table.style.marginTop = "10px";
//     let n = 1;
//     let arrL = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""]; //массивы для букв и цифр
//     let arrInt = ["", "1", "2", "3", "4", "5", "6", "7", "8", ""];
//     // строю таблицу
//     while (n <= 10) {
//         let rowBW = document.createElement("tr");
//         table.appendChild(rowBW);
//         for (let i = 1; i <= 10; i++) {
//             let td = document.createElement("td");
//             rowBW.appendChild(td);
//             td.style.width = "30px";
//             td.style.height = "30px";
//             td.style.textAlign = "center";
//             // прописываю условия для стилей и наполнения разных клеток черным
//             if (n == 10) {
//                 td.innerHTML = arrL[i - 1];
//                 td.style.backgroundColor = "lightgray";
//                 continue;
//             }
//             if (n == 1) {
//                 td.innerHTML = arrL[10 - i];
//                 td.style.transform = "rotate(180deg)";
//                 td.style.backgroundColor = "lightgray";
//                 continue;
//             }
//             if (n % 2 == 0 && i % 2 == 1) {
//                 td.style.backgroundColor = "black";
//             }
//             if (n % 2 == 1 && i % 2 == 0) {
//                 td.style.backgroundColor = "black";
//             }
//             if (n > 1 && n < 10, i == 1) {
//                 td.innerHTML = arrInt[10 - n];
//                 td.style.backgroundColor = "lightgray";
//             }
//             if (n > 1 && n < 10, i == 10) {
//                 td.innerHTML = arrInt[n - 1];
//                 td.style.backgroundColor = "white";
//                 td.style.transform = "rotate(180deg)";
//                 td.style.backgroundColor = "lightgray";
//             }
//         }
//         n++;
//     }
// }
// setChessTable();

// < !--ex 5-2 -->
// function Product(art, itemName, desc, price, brandName) {
//     this.art = art;
//     this.itemName = itemName;
//     this.desc = desc;
//     this.price = price;
//     this.brandName = brandName;
// };
// let products = [
//     new Product(1, `t - shirt`, `goods description1`, 100, `mango`),
//     new Product(2, `t - shirt`, `goods description2`, 120, `levis`),
//     new Product(3, `t - shirt`, `goods description3`, 130, `GJ`),
//     new Product(4, `t - shirt`, `goods description4`, 150, `adidas`),
//     new Product(5, `t - shirt`, `goods description5`, 200, `nike`),
// ];
// console.log(products);
// let basket = []; //создаю пустой массив корзины

// function BasketItem(art, itemName, price, quantity) {
//     this.art = art;
//     this.itemName = itemName;
//     this.price = price;
//     this.quantity = quantity;
//     this.makeDiscount = function (discount) {
//         this.price = this.price * (100 - discount) / 100;
//     }
// }

// let div = document.querySelector("div"); //ищется div и вставляется h2
// let basketAlert = document.createElement("h2");
// div.appendChild(basketAlert);
// basketReminder();

// basket = [ //создается корзина
//     new BasketItem(products[0].art, products[0].itemName, products[0].price, 2),
//     new BasketItem(products[2].art, products[2].itemName, products[2].price, 3),
//     new BasketItem(products[3].art, products[3].itemName, products[3].price, 10)
// ]
// for (let newPrice of basket) {
//     newPrice.makeDiscount(0);
// }

// function totalBasketPrice(basketArr) { //стоимость корзины
//     let currenttotalPrice = 0;
//     for (let i = 0; i <= basketArr.length - 1; i++) {
//         let totalPrice = basketArr[i].price * basketArr[i].quantity;
//         currenttotalPrice += totalPrice;
//     }
//     return currenttotalPrice;
// }

// function basketReminder() { //функция которая выводит стоимость и количество товаров
//     if (basket.length < 1) {
//         basketAlert.innerText = "корзина пуста";
//     } else {
//         basketAlert.innerText = `корзина содержит: ${basket.length} товаров на сумму ${totalBasketPrice(basket)}`
//     }
// }
// basketReminder();
// console.log(basket)

// console.log(`стоимость корзины v1: ${totalBasketPrice(basket)}`);

// < !--ex 5-3 -->

// let productsDiv = document.querySelector("#catalog");

// function setProductTable(insertionAdress, productsArr) { //создаю таблицу
//     let productsTable = document.createElement("table");
//     insertionAdress.appendChild(productsTable);
//     productsTable.style.border = "3px solid black";
//     productsTable.style.borderCollapse = "collapse";
//     productsTable.style.textAlign = "center";
//     productsTable.style.marginTop = "20px";
//     let n = 0;
//     while (n < productsArr.length + 1) {
//         let tRow = document.createElement("tr");
//         productsTable.appendChild(tRow);

//         if (n == 0) { //заполняю заголовок таблицы+стили
//             for (let i = 0; i < Object.keys(products[0]).length; i++) {
//                 let tCol = document.createElement("td");
//                 tRow.appendChild(tCol);
//                 tCol.innerText = Object.keys(products[0])[i];
//                 tCol.style.border = "1px solid black";
//                 tCol.style.textTransform = "uppercase";
//             }
//         } else { //заполняю таблицу+стили
//             for (let i = 0; i < Object.keys(products[0]).length; i++) {
//                 let tCol = document.createElement("td");
//                 tRow.appendChild(tCol);
//                 tCol.innerText = Object.values(products[n - 1])[i];
//                 tCol.style.textTransform = "capitalize";
//                 tCol.style.border = "1px solid black";

//             }
//         }
//         n++;
//     }
// }
// setProductTable(productsDiv, products);

// < !--HomeWork 6 -- >
// < !--ex 6-1 -->

// function Product(art, itemName, desc, price, brandName, quantity) {
//     this.art = art;
//     this.itemName = itemName;
//     this.desc = desc;
//     this.price = price;
//     this.brandName = brandName;
//     this.quantity = quantity;
// };
// let products = [
//     new Product(0, `t - shirt`, `goods description1`, 100, `mango`, 1),
//     new Product(1, `t - shirt`, `goods description2`, 120, `levis`, 1),
//     new Product(2, `t - shirt`, `goods description3`, 130, `GJ`, 1),
//     new Product(3, `t - shirt`, `goods description4`, 150, `adidas`, 1),
//     new Product(4, `t - shirt`, `goods description5`, 200, `nike`, 1),
// ];

// const cart = {

//     init() {
//         this.setAttrButton();
//         document
//             .querySelector("#catalog")
//             .addEventListener('click', (event) => this.buttonItemHandler(event));
//     },
//     setAttrButton() { //устанавливаю аттрибут, по которому узнаю какая именно кнопка нажималась
//         let a = document.querySelectorAll("div.product > button.buy");
//         for (let i = 0; i < a.length; i++) {
//             a[i].setAttribute(`data`, i);
//         };

//     },
//     buttonItemHandler(event) { //обрабатываю клик по кнопке
//         if (event.target.tagName !== "BUTTON") {
//             return;
//         }
//         let dataAttr = +event.target.getAttribute("data");
//         this.addToCart(dataAttr);



//     },
//     currentCart: [],

//     addToCart(dataAttr) { //добавляю товары в корзину
//         function cartItem(art, itemName, price, quantity) {
//             this.art = art;
//             this.itemName = itemName;
//             this.price = price;
//             this.quantity = quantity;
//         };
//         if (this.currentCart.length > 0) {
//             for (const prop of this.currentCart) {
//                 if (prop.art == dataAttr) {
//                     ++prop.quantity;
//                     this.totalCartPrice();
//                     this.cartInfoRender();
//                     this.setCartTable(this.currentCart);
//                     return;
//                 };

//             };
//         };
//         this.currentCart.push(new cartItem(products[dataAttr].art, products[dataAttr].itemName, products[dataAttr].price, products[dataAttr].quantity));
//         this.totalCartPrice();
//         this.cartInfoRender();
//         this.setCartTable(this.currentCart);


//     },

//     totalCartPrice() { //считаю полную стоимость корзины
//         let currenttotalPrice = 0;
//         for (let i = 0; i < this.currentCart.length; i++) {
//             let totalPrice = this.currentCart[i].price * this.currentCart[i].quantity;
//             currenttotalPrice += totalPrice;
//         }
//         return currenttotalPrice;
//     },
//     cartInfoRender() { //вывожу сколько в корзине товаров и цену
//         document.querySelector("#cart-price").innerText = `в корзине ${this.currentCart.length} товар(a) на сумму ${this.totalCartPrice()}`;
//     },
//     setCartTable(cartArr) { //рисую таблицу
//         this.isTableIn();
//         let cartTable = document.createElement("table");
//         document.querySelector("#catalog").appendChild(cartTable);
//         cartTable.style.border = "3px solid black";
//         cartTable.style.borderCollapse = "collapse";
//         cartTable.style.textAlign = "center";
//         cartTable.style.marginTop = "20px";
//         let n = 0;
//         while (n < cartArr.length + 1) {

//             let tRow = document.createElement("tr");
//             cartTable.appendChild(tRow);

//             if (n == 0) { //заполняю заголовок таблицы+стили
//                 for (let i = 0; i < Object.keys(this.currentCart[0]).length; i++) {
//                     let tCol = document.createElement("td");
//                     tRow.appendChild(tCol);
//                     tCol.innerText = Object.keys(this.currentCart[0])[i];
//                     tCol.style.border = "1px solid black";
//                     tCol.style.textTransform = "uppercase";
//                 }
//             } else { //заполняю таблицу+стили
//                 for (let i = 0; i < Object.keys(this.currentCart[0]).length; i++) {
//                     let tCol = document.createElement("td");
//                     tRow.appendChild(tCol);
//                     tCol.innerText = Object.values(this.currentCart[n - 1])[i];
//                     tCol.style.textTransform = "capitalize";
//                     tCol.style.border = "1px solid black";
//                 }
//             }
//             n++;
//         }
//     },

//     isTableIn() {
//         let t = document.querySelector("table");
//         if (t) {
//             t.remove();
//         };
//     },
// }

// window.onload = () => cart.init();


// < !--HomeWork 7 -- >
// < !--ex 7-1 -->

function Product(art, itemName, desc, price, brandName, quantity) {
    console.log(this);
    this.art = art;
    this.itemName = itemName;
    this.desc = desc;
    this.price = price;
    this.brandName = brandName;
    this.quantity = quantity;
};
let products = [
    new Product(0, `t - shirt`, `goods description1`, 100, `mango`, 1),
    new Product(1, `t - shirt`, `goods description2`, 120, `levis`, 1),
    new Product(2, `t - shirt`, `goods description3`, 130, `GJ`, 1),
    new Product(3, `t - shirt`, `goods description4`, 150, `adidas`, 1),
    new Product(4, `t - shirt`, `goods description5`, 200, `nike`, 1),
];

const cart = {

    init() {
        this.setAttrButton();
        document
            .querySelector("#catalog")
            .addEventListener('click', (event) => this.buttonItemHandler(event));
        this.cartChangeEvent();

    },
    setAttrButton() { //устанавливаю аттрибут, по которому узнаю какая именно кнопка нажималась
        let a = document.querySelectorAll("div.product > button.buy");
        for (let i = 0; i < a.length; i++) {
            a[i].setAttribute(`data`, i);
        };

    },

    buttonItemHandler(event) { //обрабатываю клик по кнопке
        if (event.target.tagName !== "BUTTON") {
            return;
        }
        let dataAttr = +event.target.getAttribute("data");
        this.addToCart(dataAttr);
    },
    currentCart: [],

    addToCart(dataAttr) { //добавляю товары в корзину
        function cartItem(art, itemName, price, quantity, change) {
            this.art = art;
            this.itemName = itemName;
            this.price = price;
            this.quantity = quantity;
            this.change = change;
        };
        if (this.currentCart.length > 0) {
            for (const prop of this.currentCart) {
                if (prop.art == dataAttr) {
                    ++prop.quantity;
                    this.totalCartPrice();
                    this.cartInfoRender();
                    this.setCartTable(this.currentCart);
                    return;
                };
            };
        };
        this.currentCart.push(new cartItem(products[dataAttr].art, products[dataAttr].itemName, products[dataAttr].price, products[dataAttr].quantity));
        this.totalCartPrice();
        this.cartInfoRender();
        this.setCartTable(this.currentCart);

    },
    cartChangeEvent() { //обрабатываю клик по кнопке в корзине 
        document
            .querySelector("div.cart")
            .addEventListener('click', (event) => this.buttonCartItemHandler(event));

    },


    buttonCartItemHandler(event) { //записываю атрибут на кнопки в корзине
        if (event.target.tagName !== "BUTTON" || event.target.classList.contains("next")) {
            return;
        }
        let dataAttr = +event.target.getAttribute("cart-data");
        let className = event.target.className;
        this.changeCartAction(dataAttr, className);
    },
    changeCartAction(artNum, className) { // изменяю состав корзины
        for (const prop of this.currentCart) { //кнопка меньше
            if (prop.art == artNum && className == "less" && prop.quantity > 0) {
                prop.quantity--;
            }
            if (prop.quantity < 1) { //если количество равно 0 удаляю элемент
                this.currentCart.splice(this.currentCart.indexOf(prop), 1);
            } else if (prop.art == artNum && className == "more") { //добавить количества
                prop.quantity++;
            } else if (prop.art == artNum && className == "delete") { // кнопка удаляет товар целиком
                this.currentCart.splice(this.currentCart.indexOf(prop), 1);
            };
            this.totalCartPrice();
            this.cartInfoRender();
            this.setCartTable(this.currentCart);

        };
    },

    totalCartPrice() { //считаю полную стоимость корзины
        let currenttotalPrice = 0;

        for (let i = 0; i < this.currentCart.length; i++) {
            let totalPrice = this.currentCart[i].price * this.currentCart[i].quantity;
            currenttotalPrice += totalPrice;
        }
        return currenttotalPrice;
    },
    totalCartItemQuantity() { //подсчет общего количества товаров
        let currenttotalQuantity = 0;

        for (let i = 0; i < this.currentCart.length; i++) {
            let totalQuantity = this.currentCart[i].quantity;
            currenttotalQuantity += totalQuantity;
        }
        return currenttotalQuantity;
    },
    cartInfoRender() { //вывожу сколько в корзине товаров и цену
        if (this.currentCart.length <= 0) {
            document.querySelector("#cart-price").innerText = `в корзине пусто`;
            return;
        };
        document.querySelector("#cart-price").innerText = `в корзине ${this.totalCartItemQuantity()} товар(a) на сумму ${this.totalCartPrice()}`;
    },
    changeButtonsRender() { //вставляю в html код с кнопками
        let buttonInsertion = `<button class="less">меньше</button><button class="more">больше</button><button class="delete">удалить</button>`;
        return buttonInsertion;
    },
    setCartTable(cartArr) { //рисую таблицу
        this.setClassFirstNextButton();
        this.deleteTable();
        if (cartArr.length == 0) {
            return;
        };
        let cartTable = document.createElement("table");
        document.querySelector(".cart-table").appendChild(cartTable);
        cartTable.style.border = "3px solid black";
        cartTable.style.borderCollapse = "collapse";
        cartTable.style.textAlign = "center";
        cartTable.style.marginTop = "20px";
        let n = 0;
        while (n < cartArr.length + 1) {

            let tRow = document.createElement("tr");
            cartTable.appendChild(tRow);

            if (n == 0) { //заполняю заголовок таблицы+стили
                for (let i = 0; i < Object.keys(this.currentCart[0]).length; i++) {
                    let tCol = document.createElement("td");
                    tRow.appendChild(tCol);
                    tCol.innerText = Object.keys(this.currentCart[0])[i];
                    tCol.style.border = "1px solid black";
                    tCol.style.textTransform = "uppercase";
                }
            } else { //заполняю таблицу+стили
                for (let i = 0; i < Object.keys(this.currentCart[0]).length; i++) {
                    let tCol = document.createElement("td");
                    tRow.appendChild(tCol);
                    tCol.innerText = Object.values(this.currentCart[n - 1])[i];
                    if (Object.keys(this.currentCart[n - 1])[i] == "change") {
                        tCol.innerHTML = this.changeButtonsRender();
                        let a = document.querySelectorAll("table>tr>td>button");
                        for (const prop of a) {
                            if (prop.hasAttribute('cart-data')) {
                                continue;
                            }
                            prop.setAttribute("cart-data", Object.values(this.currentCart[n - 1])[0]);
                        }

                    };
                    tCol.style.textTransform = "capitalize";
                    tCol.style.border = "1px solid black";
                }
            }
            n++;
        };
    },
    setClassFirstNextButton() { //устанавливаю класс для первой кнопки далее в зависимости от пустоты корзины
        if (this.currentCart.length === 0) {
            document.querySelector("div.cart > button").classList.toggle("disable-btn");
        } else {
            document.querySelector("div.cart > button").classList.remove("disable-btn");
        }

    },


    isTableIn() { //проверяю есть ли таблица на странице

        if (document.querySelector("table")) {
            return true;
        } else return false;


    },
    deleteTable() { //удаляю таблицу, если она
        let tab = document.querySelector("table");
        if (tab) {
            tab.remove();
        };
    },
}



// < !--ex 7-2 -->
const stepsToBuy = {
    init() {
        this.nextButton();
        this.activeStep();

    },
    nextButton() {

        let a = document.querySelectorAll("div.step");
        let n = 1;
        for (const prop of a) {
            this.prevBut(a, prop, n);
            prop.setAttribute("div-step-data", n);
            if (prop == a[a.length - 1]) {
                return;
            };
            let nBut = document.createElement("button");
            nBut.innerText = "далее";

            if (prop == a[a.length - 2]) {
                nBut.innerText = "завершить покупку";
            };

            prop.appendChild(nBut);
            nBut.setAttribute("class", "next");
            if (n == 1) { //добавляю класс у первой кнопки, чтобы скрыть ее
                document.querySelector("div.cart > button").classList.add("disable-btn");
            };
            nBut.setAttribute("step-data-next", n++);
        }
    },
    prevBut(nodeList, prop, n) {

        if (nodeList[0] == prop || prop == nodeList[nodeList.length - 1]) {
            return;
        };
        let prevBut = document.createElement("button");
        prevBut.innerText = "назад";

        prevBut.setAttribute("step-data-prev", n);
        prevBut.setAttribute("class", "prev");
        prop.appendChild(prevBut);


    },
    activeStep() {
        document
            .querySelector("div.cart-container")
            .addEventListener('click', (e) => this.buttonActiveStepHandler(e));
    },
    buttonActiveStepHandler(e) {
        if (e.target.tagName !== "BUTTON" && (e.target.className !== "next" || e.target.className !== "prev")) {
            return;
        };
        let ac = document.getElementsByClassName("active")[0];
        let dis = document.getElementsByClassName("disable");
        let acAtr = ac.getAttribute("div-step-data");

        if (e.target.classList.contains("next")) {

            for (const prop of dis) {

                if (acAtr == +prop.getAttribute("div-step-data") - 1) {
                    ac.classList.toggle("active");
                    prop.classList.toggle("active");
                    prop.classList.toggle("disable");
                    ac.classList.toggle("disable");
                    return;
                };
            };

        } else if (e.target.classList.contains("prev")) {
            for (const prop of dis) {
                if (acAtr == +prop.getAttribute("div-step-data") + 1) {
                    ac.classList.toggle("active");
                    prop.classList.toggle("active");
                    prop.classList.toggle("disable");
                    ac.classList.toggle("disable");
                    return;
                };
            };
        };
    },
};
window.onload = () => cart.init(), stepsToBuy.init();



// < !--HomeWork 8 -- >

// 1. выведет undefined, потому что переменная а задана через var, значит она видна в window, но значение присваивается тотлько в if
// 2. выведет ошибку поскольку функция а не определена, она приравнивается переменной b
// 3. выведет саму функцию посколько в алерте выводится ссылка на функцию и она опредлена выше ,чем var a, которая декларируется в коде без присвоения значения
// 4. выведет 10, тк в функции аргументс2 присваивается 10. но если использовать use strict то выведет 3. тут я не понял
// 5. выведет объект window, тк при передаче null в функцию в качестве this объект window
//В современном стандарте call/apply передают this «как есть». А в старом, без use strict, при указании первого аргумента null или undefined в call/apply, функция получает this = window.