const multiply = (num1, num2) => {
    if(num2 === 0) {
        return 0;
    }

    return num1 + multiply(num1, num2 - 1)
}


console.log(multiply(6, 4));
console.log(multiply(0, 2));
console.log(multiply(2, 0));
console.log(multiply(1, 5));
console.log(multiply(5, 1));
console.log(multiply(3, 3));
console.log(multiply(7, 8));
console.log(multiply(10, 10));
