const oneByN = (n) => {
    if(n === 0) {
        throw new Error("Não é possível dividir por 0");
    }
    
	if (n === 1) {
		return 1;
	}

	return 1 / n + oneByN(n - 1);
};

console.log(oneByN(1));
console.log(oneByN(2));
console.log(oneByN(3));
console.log(oneByN(10));
