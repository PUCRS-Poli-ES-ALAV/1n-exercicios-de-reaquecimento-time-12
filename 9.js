// Ex.: n = 3. Resposta: ABC, ACB, BAC, BCA, CAB, CBA.
const generateAlphabetSequence = (n) => {

    const availableLetters = Array.from({ length: n }).map((_, i) => {
        return String.fromCharCode(i + 65)
    });

    return availableLetters.join(', ')
}

const generatePermutation = (alphabet) => {
    
}

console.log(generateAlphabetSequence(5));