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


    let numberOfFilms;

    function start() {
         numberOfFilms = prompt('How many movies did you watch?', '');

         while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('How many movies did you watch?', '');
         }
    }

    start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Last seen movie', ''),
                  b = prompt('Rate the movie', '');
    
            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log('error');
                i--;
            }
        }
    }

    // rememberMyFilms();

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Error");
        }    
    }

    // detectPersonalLevel();

    

    function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    }
    showMyDB(personalMovieDB.private);

    function writeYourGenres() {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${i}`);
        }
    }
    writeYourGenres();

