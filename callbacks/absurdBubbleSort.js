const { debug } = require("node:console");
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
    debugger
    reader.question(`True or False? \n${el1} > ${el2} \n`, (response) =>{
        if (response.toUpperCase() === "TRUE"){
            callback(true)
        } else {
            callback(false)
        }
    }
)}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    debugger
    console.log("innerBubbleSort")
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
            if (isGreaterThan) {
                debugger
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                madeAnySwaps = true
            }
        })
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    } 
    outerBubbleSortLoop(madeAnySwaps)
}

function outerBubbleSortLoop(arr, madeAnySwaps){
    debugger
    if (madeAnySwaps){
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
        sortCompletionCallback(arr)
    }
    
}

function sortCompletionCallback(arr){
    // debugger
    console.log(arr)
    reader.close();
}


// innerBubbleSortLoop([12,2,1,3,4,10], 0, true, function (){
//     console.log("done")
// })