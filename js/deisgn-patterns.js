// 1  Module patterns
// Module patterns ensures privarte and public encapsulaton in javascript protecting the global namespace and diminishing naming conflicts
// IIFE 
// JQuery and Require JS uses module pattern. 


const myModule =  (()=> {
    var myPrivate = 'abc';
    return {
        publicValue: 'Amit',
        myPublic: () => {
            console.log(myPrivate);

        }
    }

})();

myModule.myPublic();




// 2 Singleton Pattern
// ensures only single instance of a class
// create instance if not exist earlier
// e.g database connection, Redux store in react, Node js module system when using require.


//3 Observer pattern - > subscription model where observer listen to events
// e.g Javascript even handling, vue.js, rxjs

class Blog {
    constructor(){
        this.observers = [];

    }
    subscribe(fn){
        this.observers.push(fn);

    }
    
    unSubscribe(){
        
    }
    publish(post){
        this.observers.forEach((observer) => observer.notify(post));
        

    }
}

class Subscriber {
    constructor(name){
        this.name = name;
    }
    notify(post){
        console.log("New post" + post + " has been published");
    }
}


// 4 Registry Pattern - used to store and retrieve the instances of object. Centralize and organize the management of object
// act as a central place
// chicken class and chickenRegistry class (make map and store chicken by id in it), add chicken, removechicken, getAllchiken
// chat & room 


// 5 Mixin - Mix the property of object with your class object
// Animal, Animal who can swim and who can fly. object.assign(myObj, swimObj)


// Proxy Pattern  - You want to create proxy of your object so that no one can access direct properties of your object
// new Proxy(myObject, handler) // handler is object= { get: (), set : }
// function proxy - . apply function in handler