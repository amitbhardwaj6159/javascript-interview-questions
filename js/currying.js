
// multiply(num1)(num2);

function multiply(num1) {
    return (num2) => {
        return num1*num2;

    }
}


// console.log(multiply(4)(9));




function sum(a, b, c) {
    return a+b+c;
}
function curried(fn){
    const arity = fn.length;
    console.log(arity);
    return function f1(...args) {
        if(args.length >= arity) {
            console.log('enough arguments');
            return fn(...args);
        } else {
            console.log('shorage of arguments')
            return function f2(...moreArgs) {
                const newArgs = args.concat(moreArgs);
                 return f1(...newArgs);
            }


        }
    }
}
const sumCurried = curried(sum);

console.log(sumCurried(1)(2)(3));
console.log(sumCurried(1)(2,3));
console.log(sumCurried(1,2,3));

