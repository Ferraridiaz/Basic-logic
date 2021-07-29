//1.Even character
function evenCharacter(str) {
    if (typeof str !== 'string') {
        return 'Error, input bukan string';
    } 
    let genap = '';
    for(let i=1; i<str.length; i+=2) {
        genap += str[i];
    }
    return genap;
}

console.log(evenCharacter('pratama'));
console.log(evenCharacter('hellohello'));
console.log(evenCharacter('hello hello hello'));
console.log(evenCharacter(''));
console.log(evenCharacter('123434'));




//2. Count Word
function count(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } else if(word === '') {
        return 0;
    } 
    let counter = 1;
    for (let i=0;i<word.length;i++) {
        if (word[i] === ' ' && word[i+1] !== ' ') {
            counter++;
        }
    }
    return counter;
}

console.log(count('pratama'));
console.log(count('hello hello hello'));
console.log(count(123434));




// 3.Count Vowel And Consonant
function countVowelAndConsonant(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } 
    let consonant = 0;
    let vowel = 0;
    for(let i=0;i<word.length;i++) {
        if (word[i] === 'a' || word[i] === 'i' || word[i] === 'u' || word[i] === 'e' || word[i] === 'o') {
            vowel++;
        } else {
            consonant++;
        }
    }
    return `Jumlah vokal: ${vowel}, Jumlah consonant: ${consonant}`;
}

console.log(countVowelAndConsonant("pratama"));




//4.Reverse word
function reverseString(str) {
    var reverseString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

console.log(reverseString("hello"));
console.log(reverseString("world!"));
console.log(reverseString("asikasikasik"));
console.log(reverseString(""));


//5.Palindrome
function isPalindrome(str){
   let output = "";
    for (let i = str.length - 1; i >=0; i--){
        output += str[i];
    }
    if (str === output) {
        return true;
    }   else{
        return false;
    }
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("kasur"));
console.log(isPalindrome("h"));
console.log(isPalindrome("kasur rusak"));
console.log(isPalindrome("erererrerere"));