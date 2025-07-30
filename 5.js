// * F(1) = 1
// * F(2) = 2
// * F(n) = 2 ∗ F(n − 1) + 3 ∗ F(n − 2).
const sequence = (n) => {
    if(n === 1 || n === 2) {
        return n
    }

    return (2 * sequence(n - 1)) + (3 * sequence(n - 2))
}


console.log(sequence(1));
console.log(sequence(2));
console.log(sequence(3));
console.log(sequence(4));
console.log(sequence(5));
