function SecondNumber(){
    var arr = [1, 2, 3, 6, 8, 12, 9, 10, 11, 15, 16, 17, 5, 4, 20];
    var max = Math.max(...arr);
    var removeToArray = arr.splice(0, 1, max);
    while(removeToArray >= 0){
        arr.splice(removeToArray, 1);
        removeToArray = arr.indexOf(max);
    }
    var result = Math.max(...arr);
    console.log(result);
    return result;
}    
SecondNumber();
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


numPrimo(7);
var number = 7;
function numPrimo(number){
    var primo = true;
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            primo = false;
        }
    }
    return primo;
}
numPrimo()