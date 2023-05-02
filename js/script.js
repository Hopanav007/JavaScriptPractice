"use strict";

    // const number = 4;

    // console.log(number);

    // let number1 = "id";

    // for (let i = 0; i <= 4; i++) {
    //     console.log(number1);
    // }

    // const obj = {
    //     name: "John",
    //     age: 22,
    //     gender: "M"
    // };

    // console.log(obj["name"]);

    // let arr = ["orange", "apple", 'sasyk', 'arbuz', 6, {}, ['sdadas', 3434] ];

    // for(let i = 0; i < arr.length; i++) {
    //    console.log(arr[i]);
    // }


    // let a = ["orange", "apple", 'sasyk', 'arbuz', 6, {}, ['sdadas', 3434] ];
    // a.forEach((element) => {
    //         console.log(element);
    //     }
    // );


    // const result = confirm("Are u dalbaeb?");
    // console.log(result);

    // const answer = +prompt("How old are you?", "18");
    // console.log(answer + 5);


    // const answers = [];

    // answers[0] = prompt('Whats your fname', '');
    // answers[1] = prompt('Whats your sname', '');
    // answers[2] = prompt('Whats your age', '');


    // console.log(typeof(answers));
    // console.log(typeof(null));

// Интерполяция!!! //

    // const category = 'toys';

    // console.log(`https://google.com/${category}/5`);

    // const user = "Babam";

    // alert(`Hello, ${user}`);



    // console.log('arr' + ' - object');
    // console.log(4 + +"5");

    // let increment = 10,
    //     dicrement = 10;

    // increment++;
    // dicrement--;

    // console.log(increment++);
    // console.log(dicrement--);

    // console.log(5%5);
    // console.log(2**1 !== 4);

    // let isUserIdhas = false,
    //     isUserPassHas = false;

    // console.log(isUserIdhas && !isUserPassHas);

    // let number = 45;

    // if (number > 45) {
    //     console.log('More');
    // } else if (number < 45) {
    //     console.log('Less');
    // } else {
    //     console.log('Exactly');
    // }

//Тернарный оператор
    // (number == 43) ? console.log('OK') : console.log('Wrong');

// Conditions
    // let num = 100;

    // if (num >= 32) {
    //     console.log('Great Job');
    // } else if (num <= 21) {
    //     console.log('Good21');
    // }
    // switch (num) {
    //     case 49: 
    //         console.log('Error');
    //         break;
    //     case 200:
    //         console.log('Good');
    //         break;
    //     default:
    //         console.log('Ok');
    //         break;
    // }
    
// Loops

    // while (num < 30) {
    //     console.log(num);
    //     num++;
    // }

    // do {
    //     console.log(num);
    //     num++;
    // }

    // while (num < 30);

    // for (let i = 1; i <= 100; i++) {
    //     if (i**2==i) {
    //         continue;
    //     }
    //     console.log(i);
    // }


    /* ------------- FUNCTIONS ------------- */

    // let number = 10;
    // function showFirstsentence(sentence, x) {
    //     console.log(sentence, x);
    //     console.log(number);
    // }

    // showFirstsentence("hahaha", 2);

    // function calc(a, b) {
    //     return a + b;
    // }
    // console.log(calc(3,2));

    // function retn() {
    //     let num = 10;
    //     return num;
    // }

    // const newNum = retn();
    // console.log(newNum);

    // const blogger = function() {
    //     let x = 304;
    //     console.log(x);
    // };

    // blogger();

    // const calc = (a, b) => { 
    //     console.log(1);
    //     return a + b;
    //  };
    // console.log(calc(2,2));
    
    /* ---------------Свойства---------- */
    
    // let fruit = "somewhere fruit";
    // console.log(fruit.slice(10,fruit.length));

    // const num = 12.2;
    // console.log(Math.round(num));

    // const input = "12.2px";
    // console.log(parseInt(input));
    

    /* ---------Practice---------- */


    // let numberOfFilms;

    // function start() {
    //      numberOfFilms = prompt('How many movies did you watch?', '');

    //      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    //         numberOfFilms = prompt('How many movies did you watch?', '');
    //      }
    // }

    // start();

    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     private: false
    // };

    // function rememberMyFilms() {
    //     for (let i = 0; i < 2; i++) {
    //         const a = prompt('Last seen movie', ''),
    //               b = prompt('Rate the movie', '');
    
    //         if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    //             personalMovieDB.movies[a] = b;
    //             console.log("done");
    //         } else {
    //             console.log('error');
    //             i--;
    //         }
    //     }
    // }

    // rememberMyFilms();

    // function detectPersonalLevel() {
    //     if (personalMovieDB.count < 10) {
    //         console.log("Просмотрено довольно мало фильмов");
    //     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //         console.log("Вы классический зритель");
    //     } else if (personalMovieDB.count >= 30) {
    //         console.log("Вы киноман");
    //     } else {
    //         console.log("Error");
    //     }    
    // }

    // detectPersonalLevel();

    

    // function showMyDB (hidden) {
    //     if (!hidden) {
    //         console.log(personalMovieDB);
    //     } 
    // }
    // showMyDB(personalMovieDB.private);

    // function writeYourGenres() {
    //     for (let i = 1; i < 4; i++) {
    //         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`);
    //     }
    // }
    // writeYourGenres();

    /* ---------Callback functions------------- */
    // function stidyCzhech(lang, callback) {
    //     console.log(`I study czhech ${lang}`);
    //     callback();
    // }

    // function finish() {
    //     console.log("Im done");
    // }
    // stidyCzhech("Chezh", finish);




    // const options = {
    //     name: 'test',
    //     width: 1024,
    //     height: 1980,
    //     colors: {
    //         border: 'white',
    //         background_color: 'black'
    //     },
    //     makeTest: function() {
    //         console.log('Test');
    //     }
    // };
    // options.makeTest();

    // const {border, background_color} = options.colors;

    // console.log(border, background_color);
    // let counter = 0;
    // for (let key in options) {
    //     if (typeof(options[key]) == 'object') {
    //         for (let i in options[key]) {
    //             console.log(`Properties: ${i} has ${options[key][i]}`);
    //         }
    //     } else {
    //     console.log(`Properties: ${key} has ${options[key]}`);
    //     counter++;
    //     }
    // }
    // console.log(counter);

    // console.log(Object.keys(options).length);



    // const arr = [1,2,3,5,6,7,8];

    // arr.forEach(function(picture, i, arr) {
    //     console.log(`${i}: ${picture} inside of array ${arr}`);
    // });
    
    // arr.pop();
    // arr.push(4);
    // console.log(arr.length);

    // for (let value of arr) {
    //     console.log(value);
    // }

    // const str = prompt("", "");
    // const products = str.split(", ");
    // products.sort();
    
    // console.log(products.join('; '));

    // const arr = [12,3,54,6,4,3,2,1];
    // arr.sort(toSort);
    // console.log(arr);

    // function toSort(a, b) {
    //     return a - b;
    // }


    
    // const obj = {
    //     a: 3,
    //     b: 6
    // };
    
    // const copy = obj;

    // copy.a = 10;

    // console.log(obj);
    // console.log(copy);

    // function copy1(mainObj) {
    //     let objCopy = {};

    //     let key;
    //     for (key in mainObj) {
    //         objCopy[key] = mainObj[key];
    //     }
    //     return objCopy;
    // }
    
    // const numbers = {
    //     a: 2,
    //     b: 5,
    //     c: {
    //         x: 7,
    //         z: 4
    //     }
    // };

    // const newNumbers = copy1(numbers);
    // newNumbers.a = 5;
    // console.log(newNumbers);
    // console.log(numbers);

    // const add = {
    //     d: 19,
    //     h: 34
    // };
    
    // const cloneObj = Object.assign({}, add);
    // // console.log(cloneObj);

    // //Spread operator

    // const video = ['Youtube', 'VK', 'rutube'],
    //       blogs = ['blogger', 'wordpress', 'NY'],
    //       internet = [...video, ...blogs, 'vk', 'facebook'];

    // console.log(internet);

    // function log(a,b,c) {
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }
    // const num = [2,4,6];
    // log(...num);

    // const array = ["a", "b"];

    // const novyArray = [...array];

    // const k = {
    //     one: 1,
    //     two: 2
    // };

    // const newObj = {...k};
    // console.log(newObj);

    //---------------OOP---------------------------

    // const soldier = {
    //     health: 100,
    //     armour: 50,
    //     sayHello: function() {
    //         console.log("Hello");
    //     }
    // };

    // const Jhon = Object.create(soldier);

    // Object.setPrototypeOf(Jhon, soldier);

    // Jhon.sayHello();

    //-----------Practice---------------

    // let numberOfFilms;

    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: true,
    //     start: function() {
    //         numberOfFilms = prompt('How many movies did you watch?', '');

    //         while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    //            numberOfFilms = prompt('How many movies did you watch?', '');
    //         }
    //     },
    //     detectPersonalLevel: function() {
    //         if (personalMovieDB.count < 10) {
    //             console.log("Просмотрено довольно мало фильмов");
    //         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //             console.log("Вы классический зритель");
    //         } else if (personalMovieDB.count >= 30) {
    //             console.log("Вы киноман");
    //         } else {
    //             console.log("Error");
    //         }    
    //     },
    //     rememberMyFilms: function() {
    //         for (let i = 0; i < 2; i++) {
    //             const a = prompt('Last seen movie', ''),
    //                   b = prompt('Rate the movie', '');
        
    //             if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    //                 personalMovieDB.movies[a] = b;
    //                 console.log("done");
    //             } else {
    //                 console.log('error');
    //                 i--;
    //             }
    //         }
    //     },
    //     showMyDB: function(hidden) {
    //         if (!hidden) {
    //             console.log(personalMovieDB);
    //         }  
    //     },
    //     writeYourGenres: function() {
    //         for (let i = 1; i < 4; i++) {
    //             let genre = prompt(`Ваш любимый жанр по номером ${i}`);

    //             if (genre === '' || genre === null) {
    //                 console.log('Wrong data');
    //                 i--;
    //             } else {
    //                 personalMovieDB.genres[i - 1] = genre;
    //             }
    //         }

    //         personalMovieDB.genres.forEach((item, i) => {
    //            console.log(`Любимый жанр ${i + 1} - это ${item}`); 
    //         });
    //     },
    //     toggleVisibleMyDB: function() {
    //         if (personalMovieDB.privat) {
    //             personalMovieDB.privat = false;
    //         } else {
    //             personalMovieDB.privat = true;
    //         }
    //     }
    // };


    // Динамическая типизация 

    // const fontSize = 216;
    // console.log(typeof(parseInt("15" + fontSize)));

    // let answ = +prompt("hello", "");

    // FALSE = {0, '', null, undefined, NaN};

    // 1)
    // let switcher = null;

    // if (switcher) {
    //     console.log("Doing...");
    // }

    // switcher = 1;

    // if (switcher) {
    //     console.log("Doing...");
    // }
    // 2)
    // (!!)

    //Tasks interview
    // let x = 5;
    // alert(++x);

    // console.log(typeof([] + false - null + true)); // пустой массив играет пустая строка NaN

    // let y = 1;
    // let x = y = 2;
    // alert(x);

    // console.log(typeof([] + 1 + 2)); // "12"

    // alert("1"[0]);

    // console.log(2 && 1 && null && 0 && undefined); //null потому что выводит первое фолс, И запинается на лжи

    // console.log(!!(a&&b) === (a&&b)) false

    // alert(null || 2 && 3 || 4); // приоритет операторов 3

    // const a = [1,2,3];
    // const b = [1,2,3];
    // console.log(a==b); // false
    
    // alert(+"Infinity");

    // console.log("Ёжик" > "яблоко"); // false

    // console.log(0 || "" || 2 || undefined); // ИЛИ запинается на правде ответ 2