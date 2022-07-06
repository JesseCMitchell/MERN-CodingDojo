// Objectives:
// Practice reading JavaScript the same way as the interpreter reads it.
// Rewrite the code the way it would be seen by the interpreter and predict the output.

// GIVEN
// console.log(example);
// var example = "I'm the example!";

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";

// console.log(hello);
// var hello = "world";

// var needle;
// function test() {
//     var needle = "magnet";
//     console.log(needle);
// }
// needle = "haystack";
// test();

// var brendan;
// function print() {
//     brendan = "only okay";
//     console.log(brendan);
// }
// brendan = "super cool";
// console.log(brendan);

// var food;
// function eat() {
//     var food = "gone";
//     food = "half-chicken";
//     console.log(food);
// }
// food = "chicken";
// eat();
// console.log(food);

// var mean = function () {
//     // we will get error 'food is not defined'
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// };
// mean();
// console.log(food);
// console.log(food);

// console.log(genre); // logs undefined
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // logs rock r&b disco

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// type error variable
