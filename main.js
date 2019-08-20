function multiplyTable(firstNumber,secondNumber){
    var output ="";
    var valid = isValid(firstNumber,secondNumber)
    if(valid){
        return valid;
    }
    var multiplyArray = generatemultiplyArray(firstNumber,secondNumber);
    output = printMultiplyTable(generatemultiplyArray)
}
    
function isValid(firstNumber,secondNumber){
    return firstNumber < secondNumber;
}
    
function generatemultiplyArray(firstNumber,secondNumber){
    var generateArry = [];
    var times = secondNumber - firstNumber + 1;
    for(var i=0;i<times;i++){
        //row
        for(var j=0;j<(i+1);j++){
            //col
            var result = [];
            var row = i+"*"+j+"="+i*j; 
            result.push(row);
        }
        generateArry.push(result);
    }      
    return generateArry;
}
    
function printMultiplyTable(generatemultiplyArray){
    
}

    module.exports = {
        multiplyTable,
        isValid,
        generatemultiplyArray,
        printMultiplyTable
    };