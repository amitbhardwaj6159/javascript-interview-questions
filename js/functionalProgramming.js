Array.prototype.mapForEach2 = function(callback) {
    var arr2 = [];
    for (let i =0 ; i<this.length; i++){
        arr2.push(callback(this[i]));
    }
    return arr2;
}

var arr1 = [1, 2, 3, 4, 5];

function mapForEach(arr, callback) {
    var arr2 = [];
    for (let i =0 ; i<arr.length; i++){
        arr2.push(callback(arr[i]));
    }
    return arr2;
}
var mappedArray = mapForEach(arr1, (item) => {
    return item*2;
})

// console.log(mappedArray);





const newArray = arr1.mapForEach2((item) => {
    return item*3;
});

// console.log(newArray);