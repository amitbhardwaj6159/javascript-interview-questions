
function buildFunctions() {
    const arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
             function() {
                    console.log(i)
                    }
                )

    }
    
    return arr;
}

function buildFunctions2() {
    const arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j){
               return function() {
                    console.log(j)
                    }

            }(i))
            
    )

    }
    
    return arr;
}

function buildFunction3() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function() {
                    console.log(i)
        })
    }
    return arr;
}

var fs = buildFunction3();

// fs[0]();
// fs[1]();
// fs[2]();
