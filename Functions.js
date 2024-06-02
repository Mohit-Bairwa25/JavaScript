/*
Function Syantax
    function functionName(parameter1, parameter2, ...) {
        // code to be executed
    }
*/

function avg(a,b){
    c=(a+b)/2;
    return c;
}

c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1, c2);


var arr =[1,2,3,4,5];
arr.forEach(function(element){
    console.log("Array Function "+element)
})