const sumMatrix = (list) => {
    if(list.length === 0) {
        return 0;
    }
    
    return list[0] + sumMatrix(list.slice(1, list.length))
}

console.log(sumMatrix([0, 1]));
console.log(sumMatrix([10, 5]));
console.log(sumMatrix([1, 2, 3, 4, 5]));
console.log(sumMatrix([-1, -2, -3, -4, -5]));
console.log(sumMatrix([100]));
console.log(sumMatrix([]));