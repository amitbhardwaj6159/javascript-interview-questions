
console.log(this);


var myObj = {
    name: 'Amit',
    surName: 'Bhardwaj',
    getMyName: () => {
        console.log(this.name);
        var self =this;
        var getSurName = () => {
            console.log(this.surName)
        }
        getSurName();
    }
}
var name = 'Anjali';
var surName = 'Sharma'

function getNameGlobal(age, childName) {
    console.log(this.name, this.surName, age, childName);
}
// myObj.getMyName() 

//  getNameGlobal.apply(myObj, [22, 'Aanya', 23, 24]);
// newGetName();