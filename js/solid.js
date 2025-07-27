

 // SRP, Every class should have onlly one reason to change


 class User {
    constructor(name){
        this.name = this.name;
    }
    toSerialize(input) {
        return JSON.stringify(input);

    }
    save() {
        // make db connection and save data
        // create separate class for that
    }
 }

 class UserSerializer {
    constructor(){}
    toSerialize(input) {
        return JSON.stringify(input);

    }
 }


 // OCP/ open closed Relation
 // software entities should be open for extension for closed for modification.
 class AreaCalculator {
    static calculate(shape) {
        if(shape == 'circle') {

        } else if(shape === 'square') {

        } else if(shape ==='triangle') {

        }
    }
 }

 /// solution

 class Circle {
    static area() {
        return '';
    }
 }

 class Square {
    static area() {
        return '';
    }
 }


 class AreaCalculator {
    static area(shape) {
        shape.areaCalculator()
    }
 }


// Liskov substitution Principle
// Objects of superclass should be  able to be replcaed with the object of a subclass without affecting the correctness of the program


class Bird {
    fly(){
        console.log('This bird can fly')
    }
}

class Duck extends Bird{
    fly(){
        console.log('Duck can fly');
    }
}

class Eagle extends Bird{
    fly(){
        console.log('Eagle can fly');
    }
}
class Panguine extends Bird{
    fly(){
        throw new Error('Panguine can not fly');
    }
}

function  makeBirdFly(bird){
    bird.fly();

}

const duck = new Duck();
const eagle = new Eagle();
const panguine = new Panguine();
makeBirdFly(duck)
makeBirdFly(eagle)

// above vialate LSP

class Bird {

}
class FlyingBird {
    fly() {
        console.log('Bird can fly');
    }
}
 
class Duck extends FlyingBird{
    fly(){
        console.log('Duck can fly');
    }
}

class Panguine extends Bird{
    fly(){
        throw new Error('Panguine can not fly');
    }
}



// ISP Interface segregation principle 
// A class shouldn't be forced to implement interfaces it doesn't use

class Worker {
    work(){
        console.log('working')
    }
    eat(){
        console.log('working')
    }
    sleep(){
        console.log('working')
    }
}

function manageWork(worker) {
   worker.work();
}

// Dependency inversion principle
// Main application logic should depend on abstraction not on low level modules/code. It provides abstractions and decoupling
// use sign in example using, authenticate, and in future we provide gmail, facebook login




// Law of demeter
// Our objects don't reveal too much about their structure or their collaborator's structures 
//ShoppingMall-> chargeCustomer ->  Person -> wallet -> money
// don't use three dots, use only immediate objects

