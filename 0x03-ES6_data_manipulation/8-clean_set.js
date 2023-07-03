const word = 'hello';
const filteredWord = Array.from(word).filter((a, index) => index >= 3).join('');
console.log(filteredWord); // Output: "lo"
