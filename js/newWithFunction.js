
function Person(fname, lname) {
    this.fname=fname;
    this.lname = lname
    this.getFirstName = function() {
        return this.fname;
    }
}

Person.prototype.displayName = function(){
    return this.fname + ' '+ this.lname;
}

const amit = new Person('Amit', 'Bhardwaj');
const john = new Person('John', 'Doe');
console.log(amit);
console.log(john);



console.log(amit.displayName());

var a = 3;
var b = new Number(3);
console.log(a);
console.log(b);