const sum = (a, b) => {
    if (b === 0) {
        return a;
    }
    
    return sum(a + 1, b - 1);
}

console.log(sum(3, 2));
console.log(sum(0, 5));
console.log(sum(7, 0));
console.log(sum(4, 4));
