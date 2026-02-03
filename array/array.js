

let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); //adds date to array
fruits.pop("Date"); //removes date from array
fruits.splice(1, 2); //1 is the index of banana and 2 is index of banana in array
console.log(fruits); // Banana

fruits.splice(2, 0,"elderberry");
console.log(fruits); // 3

let cart = [];
cart.path = ("laptop");
cart.path = ("phone");
cart.path = ("tablet");
console.log(cart); // tablet

// cart.pop();
// console.log(cart); // phone

// cart.unshift("monitor");
// console.log(cart); // monitor, phone

// console.shift();
// console.log(cart); // phone

//loops in arrays

let marks=[90, 80, 70, 60, 50];
for(let i=0; i<marks.length; i++){
    console.log(marks[i])
}

// map method
// let increaseMarks = marks.map(function(mark){
//     return mark + 5;
// });
//     console.log(increaseMarks); //95, 85, 75, 65, 55
//     console.log(marks);

let increaseMarks = marks.map((mark) => mark +5);
console.log(increaseMarks); //95, 85, 75, 65, 55
console.log(marks);

// forEach method
marks.forEach(function(marks){
    console.log(marks);
});

// let increaseMarks = marks.forEach((marks) => mark +5);
// console.log(increaseMarks); //95, 85, 75, 65, 55
// console.log(marks);

let students = ["mahesh", "ramesh", "suresh"];
students.forEach((student) => {
    console.log(student);
});

// Industrial Usecase of map and forEach()

let users = [
    {firstName: "Mahesh", lastName: "Kumar", age: 25},
    {firstName: "Ramesh", lastName: "Sharma", age: 30},
];

// console.log("users");

users.forEach((user) => {
    console.log("User:", user.firstName.toUpperCase());
    console.log("user:",user.lastName.toUpperCase());
});

let names = users.map(user => user.firstName.toUpperCase());
console.log( names);

// feature                 forEach()        map()
// Return new Array           X              yes
//used for                  Action          Transformation
//return value              undefined         new array
//modifies original array     no              no
//interview preference        both depends on the useCase




