
function displayName(fname, lname, age, ...rest) {
    console.log(fname, lname, age);
    console.log(arguments);
    console.log(rest);

}

// automatic semi colon insertion
function getName() {
    // treat as return; due to carriage return
    return 
    {
        a: 2
    }
}

console.log(getName());

displayName('Amit', 'Bhardwaj', 12, 'hi', 1, 2, 3);