// * A(m, n) = n + 1, se m = 0
// * A(m, n) = A(m − 1, 1), se m != 0 e n = 0
// * A(m, n) = A(m − 1, A(m, n − 1)), se m != 0 e n != 0.
const ackerman = (m, n) => {
    if(m === 0) {
        return n + 1;
    }

    if(n === 0) {
        return ackerman(m - 1, 1);
    } else {
        return ackerman(m - 1, ackerman(m, n - 1))
    }
}

console.log(ackerman(3,4));