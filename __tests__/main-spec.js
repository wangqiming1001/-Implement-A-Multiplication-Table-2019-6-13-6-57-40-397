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

it ('should generate result string', () => {
     //given
     const multiplyArray = [];
     multiplyArray[0] = [];
     multiplyArray[0][0] = "2*2=4";
     //when
     const result = printMultiplyTable(multiplyArray);
     //then
     expect(result).toBe("2*2=4 \n");
});

it ('should print multiplyTable', () => {
     //given
     const firstNumber = 2;
     const secondNumber = 3;
     //when
     const result = multiplyTable(firstNumber,secondNumber);
     //then
     expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
