
function throttle(fn, timeout) {
    let isWaiting = false;
    return function(...args) {
        if(!isWaiting) {
            fn.apply(this, args);
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
            }, timeout)
        }
    }
}


function doOperation(a,b) {
    console.log(a, b);

    console.log('Making http call');
}

const throttledDoOperation = throttle(doOperation, 2000);


throttledDoOperation(1,3);
setTimeout(() => {
    throttledDoOperation(3,4);
}, 1000);
setTimeout(() => {
    throttledDoOperation(3,4);
}, 1500);
setTimeout(() => {
    throttledDoOperation(9,4);
}, 1900);
setTimeout(() => {
    throttledDoOperation(10,4);
}, 2200);
