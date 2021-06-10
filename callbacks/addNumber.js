const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumber(sum, numsLeft, completionCallback){
    reader.question("Give us a number!", answer => {
        sum += parseInt(answer);
        numsLeft --;
        console.log(sum)

        if (numsLeft === 0){
            completionCallback(sum);
            return;
        }
        return addNumber(sum, numsLeft, completionCallback)
    })
}

function completionCallback(num){
    reader.close();
    console.log(num);
}

addNumber(0, 4, completionCallback);