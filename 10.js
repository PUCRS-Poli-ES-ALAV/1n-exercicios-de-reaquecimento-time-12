// * fibg(f0, f1, 0) = f0
// * fibg(f0, f1, 1) = f1
// * fibg(f0, f1, n) = fibg(f0, f1, n − 1) + fibg(f0, f1, n − 2), se n > 1.
const fibg = (f0, f1, n) => {
	if (n === 0) {
		return f0;
	}

	if (n === 1) {
		return f1;
	}

    return fibg(f0, f1, n - 1) + fibg(f0, f1, n - 2);
};


console.log(fibg(0, 1, 0));
console.log(fibg(0, 1, 1));
console.log(fibg(0, 1, 2));
console.log(fibg(0, 1, 3));
console.log(fibg(0, 1, 4));
console.log(fibg(0, 1, 5));

console.log(fibg(2, 3, 0));
console.log(fibg(2, 3, 1));
console.log(fibg(2, 3, 2));
console.log(fibg(2, 3, 3));
console.log(fibg(2, 3, 4));

console.log(fibg(1, 1, 10));
