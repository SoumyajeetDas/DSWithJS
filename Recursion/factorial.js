const factorial = (n)=>{

    if(n===1) return 1;

    else return n*factorial(n-1)

}

console.clear();

console.log("Factorial is : ",factorial(3));