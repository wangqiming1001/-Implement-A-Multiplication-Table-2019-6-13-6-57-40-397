const {multiplyTable,isValid,generatemultiplyArray,printMultiplyTable} = require('../main');

it('should divide two numbers',() =>{
    //given
    var firstNumber =2;
    var secondNumber=3;
    //when
    var result=isValid(firstNumber,secondNumber);   
    //then
    expect(result).toBe(true);
});


it('should generate array with table items',() =>{
       //given
        var firstNumber = 2;
        var secondNumber = 3;
        //when
        var generateArry=generatemultiplyArray(firstNumber,secondNumber);   
        //then
        expect(generateArry[0][0],'2*2=4');
        expect(generateArry[1][0],'2*3=6');
        expect(generateArry[1][1],'3*3=9');
    });