
function debounce(fn, timeout) {
    let timeoutId;
    return function(...args) {
        console.log('args', args);
        clearTimeout(timeoutId)
         timeoutId = setTimeout(() => {
            fn.apply(this, args);
        })
    }
}


function doOperation(a,b) {
    console.log(a, b);

    console.log('Making http call');
}

const debounceDoOperation = debounce(doOperation, 2000);


debounceDoOperation(1,3);
debounceDoOperation(3,4);
debounceDoOperation(2,3);
debounceDoOperation(5,6);
debounceDoOperation(8,9);
