// Buatlah fungsi validasi untuk string yang diberikan tanpa menggunakan regex (regular expression), sesuai dengan rule di bawah ini: 
// - input = string hanya mengandung <>{}[] 
// -  setiap ada pembuka harus ditutup dengan karakter yang sesuai 
// - tidak boleh ada penutup sebelum pembuka, misal ']<>' 
// - tidak boleh ada kurung yang mengurung kurungan lain, misalnya '<[>]' 
// - kurung boleh didalam kurung lain secara penuh, misal '<[]{<>}>' 
// - panjang string adalah 1 – 4096

function isValidString(input) {
    const stack = [];
    
    const opening = ['<', '{', '['];
    const closing = ['>', '}', ']'];
    
    const matchingBracket = {
        '>': '<',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        
        if (opening.includes(char)) {
            stack.push(char);
        } 
        else if (closing.includes(char)) {
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBracket[char]) {
                return false;
            }
            stack.pop();
        }
        else {
            return false;
        }
    }
    
    return stack.length === 0;
}

// usage
console.log(isValidString('<[]{<>}>')); 
console.log(isValidString('<[>'));      
console.log(isValidString('<[>{]}'));  
console.log(isValidString('<{[<>]}>'));

// How to run?
// 1. Install Node.js from nodejs.org.
// 2. Open a terminal and navigate to the directory where your file is located.
// 3. Run the code using the command: node isValidString.js

// Output
// true
// false
// false
// true