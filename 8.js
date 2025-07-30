const isPalindrome = (str) => {
    if(str.length === 1 || str === "") {
        return true;
    }

    const firstChar = str[0]
    const lastChar = str[str.length - 1]

    const tail = str.slice(1, str.length - 1)

    return (firstChar === lastChar) && isPalindrome(tail)
}

console.log(isPalindrome("ovo"))
console.log(isPalindrome("v"))
console.log(isPalindrome("vó"))
console.log(isPalindrome("palavra"))