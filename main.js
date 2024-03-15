/* START CODE UNDER THIS LINE */

//----------------pulse check--------------------

// Q1:

// 1

if (10 <= 10) {
}
// 2

if (5 > 3) {
}
// 3

if (5 > 10) {
}
else {
}
// 4

if (2 < 3 && 7 > 10) {

}
// 5

if ("hello" === "hello") {
}

// Q2:

true && true && false;
true && false;
false;

true || (true && false);
true || false;
true;

5 === 2 || 1 < 10;
false || true;
true;

(!false && true) || (!true && true);
true || false;
true;

// Q3:

const legalAge = function (age) {
    // TODO: Your code here
    return age >= 18;
};

console.log(legalAge(20)); // => true
console.log(legalAge(18)); // => true
console.log(legalAge(17)); // => false


// Q4:

const isItMyName = function (name) {
    // TODO: Your code here
    if (name === "jehad") {
        console.log(true);
    } else {
        console.log(false);
    }
};

// the following output depends on the assumption that your name is `John`
isItMyName("Mark"); // => false
isItMyName("Sarah"); // => false
isItMyName("jehad"); // => true

// Q5:

const positiveOrNegative = function (number) {
    // TODO: Your code here
    if (number > 0) {
        console.log(number + "is positive")
    }
    else if (number < 0) {
        console.log(number + "is negative")
    }
    else {
        console.log(number + "is neither positive nor negative");
    }
};

positiveOrNegative(10); // => 10 is positive
positiveOrNegative(-10); // => -10 is negative
positiveOrNegative(0); // => 0 is neither positive nor negative


// -----------------practice-----------------------


// Q1:

// you could use the `toLowerCase` string methods to convert a string into lower case
"HeLlO wOrlD".toLowerCase(); // => "hello world"

// you could use the `toUpperCase`string methods to convert a string into upper case
"HeLlO wOrlD".toUpperCase(); // => "HELLO WORLD"

const toLowerOrUpperCase = function (string, strCase) {
    // TODO: Your code here
    if (strCase === "lower") {
        return string.toLowerCase();
    } else if (strCase === "upper") {
        return string.toUpperCase();
    } else {
        return "String case must be lower or upper";
    }
};

console.log(toLowerOrUpperCase("HELLO WORLD", "lower")); // => "hello world"
console.log(toLowerOrUpperCase("my name is john", "upper")); // => "MY NAME IS JOHN"
console.log(toLowerOrUpperCase("my name is john", "mixed")); // => "String case must be lower or upper"

// Q2:

// one handy string property `length` is used to return the length of a string
"hello".length; // => 5
"hello world".length; // => 11 (notice how the space in between the words counted as a character)

// - words less than 5 are considered short words
// - words in between 5 and 8 are considered medium words
// - words in between 9 and 13 are considered long words
// - words more than 13 are considered very long words

const howLong = function (word) {
    // TODO: Your code here
    const length = word.length;
    if (length < 5) {
        return "short";
    } else if (length >= 5 && length <= 8) {
        return "medium";
    } else if (length >= 9 && length <= 13) {
        return "long";
    } else {
        return "vary long";
    }
};


console.log(howLong("and")); // => "short"
console.log(howLong("function")); // => "medium"
console.log(howLong("corresponding")); // => "long"
console.log(howLong("Supercalifragilisticexpialidocious")); // => "very long"


// Q3:

// since strings store a series of characters in an ordered way
// we could use the index of the character to access the character in the string
// each character in the string has its own unique identifying number (index)
// the index value starts at zero and for every letter that is added after the first one, the index will be incremented by one

"hello"[0]; // => h
"hello"[1]; // => e
"hello"[2]; // => l
"hello"[3]; // => l
"hello"[4]; // => o

// write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character. It doesn't matter if it's lowercase or uppercase

const startsWith = function (string, character) {
    // TODO: Your code here
    const lowerCaseString = string.toLowerCase();
    const lowerCaseCharacter = character.toLowerCase();
    return lowerCaseString[0] === lowerCaseCharacter;

};
console.log(startsWith("Hello", "h")); // => true
console.log(startsWith("hello", "h")); // => true
console.log(startsWith("hello", "a")); // => false
console.log(startsWith("World", "h")); // => false
console.log(startsWith("World", "a")); // => false


// Q4:

const endsWith = function (string, character) {
    // TODO: Your code here
    const lowerCaseString = string.toLowerCase();
    const lowerCaseCharacter = character.toLowerCase();
    const lastCharacter = lowerCaseString.charAt(lowerCaseString.length - 1);
    return lastCharacter === lowerCaseCharacter;


};

console.log(endsWith("Hello", "o")); // => true
console.log(endsWith("Hello", "O")); // => true
console.log(endsWith("hellO", "o")); // => true
console.log(endsWith("World", "h")); // => false
console.log(endsWith("World", "a")); // => false
console.log(endsWith("World", "c")); // => false


// Q5:

const deposit = function (amount) {
    // TODO: Your code here
    if (typeof amount !== "number") {
        return "please enter a number"
    } else if (amount <= 0) {
        return "please enter a positive number"
    } else
        return amount;

};

console.log(deposit(100)); // => 100
console.log(deposit(250)); // => 250
console.log(deposit(-100)); // => "Please enter a positive number"
console.log(deposit("100")); // => "Please enter a number"

// Q6:

const oddOrEven = function (number) {
    // TODO: Your code here
    if (number % 2 === 0) {
        return "number is even";
    }
    else {
        return "number is odd"
    }
};

console.log(oddOrEven(1)); // => "1 is odd"
console.log(oddOrEven(2)); // => "2 is even"
console.log(oddOrEven(5)); // => "5 is odd"
console.log(oddOrEven(10)); // => "10 is even"

// Q7:

const stringCase = function (string) {
    // TODO: Your code here
    if (string === string.toUpperCase()) {
        return "all upper case";
    }
    else if (string === string.toLowerCase()) {
        return "all lower case";
    }
    else {
        return "mix case";
    }
};

console.log(stringCase("JOHN")); // => "all upper case"
console.log(stringCase("john")); // => "all lower case"
console.log(stringCase("joHN")); // => "mix case"


// Q8:????????????????????????????

// const isLeapYear = function (year) {
//     // TODO: Your code here
// };

// isLeapYear(2000); // => true
// isLeapYear(2004); // => true
// isLeapYear(2020); // => true
// isLeapYear(2096); // => true

// isLeapYear(1603); // => false
// isLeapYear(2021); // => false
// isLeapYear(2200); // => false
// isLeapYear(2500); // => false
// isLeapYear(2600); // => false
// isLeapYear(3000); // => false

// Q9:

const login_v01 = function (username, password) {
    // TODO: Your code here
    if (username.length > 6 && password.length >= 8) {
        return "login successful";
    } else {
        return "login failed";
    }
};

console.log(login_v01("John", "1234")); // => "login failed"
console.log(login_v01("John", "12345678")); // => "login failed"
console.log(login_v01("john_doe", "123456")); // => "login failed"
console.log(login_v01("john_doe", "12345678")); // => "login successful"


// Q10:

// // accounts:
// // 1- username: "john_doe", password: "koljgwEA"
// // 2- username: "jane_doe", password: "12345678"

// const login_v02 = function (username, password) {
//     // TODO: Your code here
// };

// // usernames are not case sensitive but passwords are
// login_v02("JOHN_DOE", "koljgwEA"); // => "login successful"
// login_v02("john_doe", "KOLJGWEA"); // => "login failed"
// // both information need to be true to return a success message
// login_v02("john_doe", "12345678"); // => "login failed"
// login_v02("jane_doe", "koljgwEA"); // => "login failed"
// login_v02("jane_doe", "12345678"); // => "login successful"


// Q11:

// // 1- `username must be more than 6 characters long`
// // 2- `password must be at least 8 characters long`
// // 3- `username doesn't exist`.
// // 4- `wrong password`.

// // accounts:
// // 1- username: "john_doe", password: "koljgwEA"
// // 2- username: "jane_doe", password: "12345678"

// const login_v03 = function (username, password) {
//     // TODO: Your code here
// };

// login_v03("john_doe", "koljgwEA"); // => "login successful"
// login_v03("jane_doe", "12345678"); // => "login successful"

// login_v03("john", "12345678"); // => "username must be more than 6 characters long"
// login_v03("jane_doe", "123456"); // => "password must be at least 8 characters long"

// login_v03("MrPotato", "12345678"); // => "username doesn't exist"
// login_v03("jane_doe", "123456789"); // => "wrong password"


// ---------------------ADVANCED PRACTICE----------------------


// Q1:


const letterInString = function (string, letter) {
    // TODO: Your code here
    const lowerCaseString = string.toLowerCase();
    const lowerCaseLetter = letter.toLowerCase();
    return lowerCaseString.includes(lowerCaseLetter);
};

console.log(letterInString("Hello", "E")); // => true
console.log(letterInString("Hello", "Z")); // => false


// Q2:


// const guessTheSquareRoot = function (number, squareRoot) {
//     // TODO: Your code here
// };

// guessTheSquareRoot(4, 2); // => "correct"
// guessTheSquareRoot(4, 3); // => "incorrect"


// Q3:


// const randomMove = function () {
//     // TODO: Your code here
// };

// randomMove(); // => "rock"
// randomMove(); // => "rock"
// randomMove(); // => "paper"
// randomMove(); // => "scissors"


// Q4:


// const rockPaperScissors_v01 = function (move) {
//     // TODO: Your code here
// };

// rockPaperScissors_v01("rock"); // => "valid move"
// rockPaperScissors_v01("paper"); // => "valid move"
// rockPaperScissors_v01("scissors"); // "valid move"
// rockPaperScissors_v01("knife"); // => "invalid move"


// Q5:


// // game rules:
// // 1- rock beats scissors
// // 2- paper beats rock
// // 3- scissors beats paper

// // important:
// // use the `randomMove` function that you have created previously (it must be working correctly)
// // read the comments inside the function to know how to get the random value and save it in a variable to use it
// // if the user input would beat the random input then return `you win`
// // if the user input would lose against the random input then return `you lose`
// // if the user input is the same as the random input then return `it is a draw`
// // keep the move validation from the previous question

// const rockPaperScissors_v02 = function (move) {
//     // use randomMove to get the value of the random move
//     const randomMoveForComputer = randomMove();
//     // randomMoveForComputer; => rock (use it by referencing it's name, the random value should stay the same)
//     // TODO: Your code here
// };

// rockPaperScissors_v02("rock"); // => "you win"
// rockPaperScissors_v02("paper"); // => "you win"
// rockPaperScissors_v02("rock"); // => "you lose"
// rockPaperScissors_v02("scissors"); // => "you win"
// rockPaperScissors_v02("paper"); // => "it is a draw"
