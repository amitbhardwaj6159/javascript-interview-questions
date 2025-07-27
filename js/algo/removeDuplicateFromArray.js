

const duplicateArray = [4,3,3,6,7,7,0,2,4,10];

function getUniqueArray(inputArr) {
    // const newArray = [];
    // inputArr.forEach((value) => {
    //     if(!newArray.includes(value)) {
    //         newArray.push(value);
    //     }
    // });

   return  inputArr.filter((value, index) => inputArr.indexOf(value) === index  );

}

console.log(getUniqueArray(duplicateArray))