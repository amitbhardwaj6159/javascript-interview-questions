

var person = {name: "Amit", id: 2, age: 24};

var anjali = {name: "Anjali"};

anjali.__proto__ = person;

console.log(anjali.age);
