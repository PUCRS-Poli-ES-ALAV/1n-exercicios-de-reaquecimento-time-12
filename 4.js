const reverseString = (str) => {
    const lastIndex = str.length - 1

    if(lastIndex === -1) {
        return str;
    }

    const lastChar = str[lastIndex]
    const reversedTail = reverseString(str.slice(0, -1))

    return `${lastChar}${reversedTail}`
}

console.log(reverseString("ola"));
console.log(reverseString("ovo"));
console.log(reverseString("palavra"));
