const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
    let state = PENDING;
    let value = '';
    const handlers = [];
    const catches = [];
    console.log("hello");
    function resolve(result) {
        console.log('in resolve', state);
        if(state === PENDING) return;
        state = FULFILLED;
        value = result;
        handlers.forEach((handler)=>handler(value));
    }
    function reject(error){
        if(state === PENDING) return;
        state=REJECTED;
        value=error;
        catches.forEach((c) => c(error));
    }
    this.then = (callback) => {
        console.log(' in then', state);
        if(state === FULFILLED) {
            callback(value)
        } else {
            handlers.push(callback);
        }

    }
    state = 
    executor(resolve, reject);
}

const doWork = function(resolve, reject) {
    console.log('in executor')
    setTimeout(() => {
        resolve("Hello world");
    }, 1000)
}

const myPromise = new customPromise(doWork)
myPromise.then((res) => {
    console.log(res);
})



async function doSomeWork(){
    console.log('in async');
    const res = await fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20');
    const response = await res.json();
    console.log('end async');
    console.log(response);
    return response;
}

console.log('before async');
const value = doSomeWork();
if(value) {
    console.log(value);
}

console.log('after async');

var name = 'amit';
function myName() {
    var name = 'sharma';
    console.log(name);
}
console.log(name);
myName();
console.log(name);


var myObj = {
    newname: "Amit",
    showMyName: () => {
        var newname = "Bhardwaj";
        return function() {
            console.log("inner" + this.newname);
        }
    }
}

const newNmae = myObj.showMyName();
newNmae();

var names = ["Aanya", "Amaay", { id: 2}];
var names2 = Array.from(names);
names2[0] = "Aanya Bhardwaj";
names[2].id = 3;
names2.push("Amit");
console.log(names);
console.log(names2);






// fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
// .then((response) => {response.json()})
// .then((data) => console.log(data))
// .then((data1)=> console.log(data1));
