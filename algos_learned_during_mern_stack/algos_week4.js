

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// MON
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "baba" => true
// "baab"

// "bcda" => false
// "abcd"


function canStrBecomePalindrome(str) {
    let newObject = {};
    for(let i=0; i<str.length; i++){
        let current = str[i];
        if(newObject.hasOwnProperty(current)){
            newObject[current] +=1;
        }
        else{
            newObject[current] = 1;
        }
    }
    let count = 0;
    for (var key in newObject){
        if (newObject[key] % 2 > 0){
            count ++
        }
    }
    if (count > 1){return false}
    else {return true}
}
console.log(canStrBecomePalindrome("aabbccdde"))
console.log(canStrBecomePalindrome("baba"))
console.log(canStrBecomePalindrome("bcda"))


function canStrBecomePalindromeTV(str) {
    // check zero length edge case
    if (str.length === 0) {
        return false;
    }

    // create a map for character frequencies, a count of odds, and if the length is odd bool
    const charFrequencies = {};
    let oddFreqCount = 0;
    let isOddLen = str.length % 2 !== 0;

    // loop characters of your string
    // 0(n)
    for (const char of str) {
        if (!charFrequencies.hasOwnProperty(char)) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
    }

    // loop frequencies.
    // 0(n+m)
    for (const key of Object.keys(charFrequencies)) {
        const charFreq = charFrequencies[key];

        // if odd occurrences
        if (charFreq % 2 !== 0) {
            oddFreqCount++;

            // either the string is odd and we allow one odd number
            // or the string is even and we allow none

            // either way fail right here
            if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
                return false;
            }
        }
    }

    // get through the for in loop? you are true
    return true;
}
console.log(canStrBecomePalindromeTV("aabbccdde"))
console.log(canStrBecomePalindromeTV("baba"))
console.log(canStrBecomePalindromeTV("bcda"))



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// TUES
// ------------------------------------------------------------------------------------------------------------------------------------------------------


/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

function backspaceCompare(S, T) {
    let newS = [];
    let newT = [];
    for(let i=0; i<S.length; i++){
        if (S[i] !== "#"){
            newS.push(S[i])
        }
        else{
            newS.pop()
        }
    }
    for(let i=0; i<T.length; i++){
        if (T[i] !== "#"){
            newT.push(T[i])
        }
        else{
            newT.pop()
        }
    }
    if(newS.join('') === newT.join('')){
        return true;
    } return false;
}

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a##c", "#a#c"))
console.log(backspaceCompare("a##c", "#a#cc"))


function backspaceCompareTV(S, T) {
    let sBackspaced = processBackspaces(S);
    let tBackspaced = processBackspaces(T);

    if (sBackspaced === tBackspaced) {
        return true;
    } else {
        return false;
    }
}

function processBackspaces(s) {
    let backspaceCount = 0;
    let str = "";

    // loop backwards and skip if we see a #
    for (let i = s.length - 1; i >= 0; i--) {
        let isBackspace = s[i] === "#";

        if (backspaceCount > 0 && !isBackspace) {
            backspaceCount--;
        } else if (isBackspace) {
            backspaceCount++;
        } else {
            str = s[i] + str;
        }
    }
    return str;
}



/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: Hello World
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

function canBuildS1FromS2(neededStr, availableStr) {
    let newObject1 = {};
    let newObject2 = {};
    // build a dictionary with all the letters of the first string and their count
    for(let i=0; i<neededStr.length; i++){
        let current1 = neededStr[i].toLowerCase();
        if(newObject1.hasOwnProperty(current1)){
            newObject1[current1] +=1;
        }
        else{
            newObject1[current1] = 1;
        }
    } 
    // build a dictionary with all the letters of the second string and their count
    for(let j=0; j<availableStr.length; j++){
        let current2 = availableStr[j].toLowerCase();
        if(newObject2.hasOwnProperty(current2)){
            newObject2[current2] +=1;
        }
        else{
            newObject2[current2] = 1;
        }
    }
    // check to see the count of each letter in the second string is greater 
    // than or equal to the count of the letters in the first string
    let response = false;
    for (const key of Object.keys(newObject1)){
        if (newObject1[key] <= newObject2[key]){
            response = true;
        } else {
            response = false;
            return response;
        };
    } return response;
}

console.log(canBuildS1FromS2("hey", "hello"))
console.log(canBuildS1FromS2("hello", "helo"))
console.log(canBuildS1FromS2("Hello World", "lloeh wordl"))



function canBuildS1FromS2TV(neededStr, availableStr) {
    const availableHash = {};

    // build hash
    for (const availableChar of availableStr) {
        const availableCharLower = availableChar.toLowerCase();

        if (availableHash.hasOwnProperty(availableCharLower) === false) {
            availableHash[availableCharLower] = 1;
        } else {
            availableHash[availableCharLower]++;
        }
    }

    // check hash
    for (const neededChar of neededStr) {
        const neededCharLower = neededChar.toLowerCase();

        if (availableHash.hasOwnProperty(neededCharLower) === false) {
            // never existed
            return false;
        } else if (availableHash[neededCharLower] === 0) {
            // existed but emptied
            return false;
        } else {
            // exists and must be decremented
            availableHash[neededCharLower]--;
        }
    }

    // survive all that? you are true
    return true;
}

console.log(canBuildS1FromS2TV("hey", "hello"))
console.log(canBuildS1FromS2TV("hello", "helo"))
console.log(canBuildS1FromS2TV("Hello World", "lloeh wordl"))




// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------


/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods like split, slice, and substring
*/
// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonorCaleb = (honorific, fullNames) => {
  let newArray = [];
  for(let i=0; i<fullNames.length; i++){
    let specifiedName = fullNames[i].split(",");
    let full = honorific.concat("", specifiedName[1], " ", specifiedName[0]);
    newArray.push(full);
  }
  return newArray;
}

console.log(addHonorCaleb(honorific2, names2));


const addHonorTV = (honorific, fullNames) => {
    const output = [];
    for (const fullName of fullNames) {
        let firstName = "";
        let lastName = "";
        let foundComma = false;

        for (let i = 0; i < fullName.length; i++) {
        const char = fullName[i];

        if (char === ",") { foundComma = true };

        if (char !== " " && char !== ",") {
            if (foundComma === false) {
            lastName += char;
            } else {
            firstName += char;
            }
        }
        }
        output.push(`${honorific} ${firstName} ${lastName}`);
    } return output;
}

console.log(addHonorTV(honorific2, names2));



// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2

// str = "dvadf"
// => 4


const lengthOfLongestSubstrTV = (s) => {
    let max = 0; // max count
    let count = 0; // current count
    let seenAtIdx = {}; // character dictionary

    for (let i = 0; i < s.length; i++) { // loop the str
        const char = s[i]; // pull out each character

        // {"d": 0, "c": 1, "f": 2}

        // check if it's in the dict
        if (!seenAtIdx.hasOwnProperty(char)) {
        seenAtIdx[char] = i; // if not save the character and it's index
        count++; // increment the count
        if (count > max) { // update max if higher
            max = count;
        }
        // otherwise it's in the dictionary already and we have to start over
        } else {
        if (i === s.length - 1) { // make sure we're not done
            return max;
        }
        // move i back to where the dupe was last seen.
        // i will then increment one after the last seen dupe location.
        // then cases like "dvadf", where "vadf" is the longest, we must
        // backwards to just after the first "d" to catch it
        i = seenAtIdx[char];
        seenAtIdx = {};
        count = 0;
        }
    } return max;
}

console.log(lengthOfLongestSubstrTV("abc"));
console.log(lengthOfLongestSubstrTV("cabc"));
console.log(lengthOfLongestSubstrTV("aabbc"));
console.log(lengthOfLongestSubstrTV("dvadf"));

const lengthOfLongestSubstrCaleb = (s) => {
    let tempObj = {}
    for(let i=0; i<s.length; i++){
        let current1 = s[i].toLowerCase();
        if(tempObj.hasOwnProperty(current1)){
            tempObj[current1] +=1;
        }
        else{
            tempObj[current1] = 1;
        }
    } 
    return tempObj;
}

console.log(lengthOfLongestSubstrCaleb("abc"));
console.log(lengthOfLongestSubstrCaleb("cabc"));
console.log(lengthOfLongestSubstrCaleb("aabbc"));
console.log(lengthOfLongestSubstrCaleb("dvadf"));



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// THURS
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Examples:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.


// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".


// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []


// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

function stringWords(words) {
    let arr = [];
    for (let i of words) {
        for (let x of words) {
            if (x.includes(i) && i !==x) {
                arr.push(i);
            }
        }
    }
    return arr;
}
console.log(stringWords(["mass","as","hero","superhero"]));
console.log(stringWords(["leetcode","et","code"]));
console.log(stringWords(["blue","green","bu"]));


// functional
let matching = words => words.filter(
    word => words.some( // if this word and the other word are different
        otherWord => word !== otherWord && otherWord.includes(word) // and it includes the other
    )
);

// golf functional
let match2 = w => w.filter(
    w1 => w.some(
        w2 => w2.includes(w1) && w2 !== w1));

// iterative using .search
function matching3(words){
    var output = [];
    var results = 0;

    for(var i = 0; i < words.length; i++){
        for(var j = i+1; j < words.length; j++){

            if(words[i].length < words[j].length){
                results = -1;
                results = words[j].search(words[i]);
                if(results != -1){
                    output.push(words[i]);
                }
            }else{
                results = -1;
                results = words[i].search(words[j])
                if(results !== -1){
                    output.push(words[j])
                }
            }
        }
    }

    return output;
}

console.log(matching(["mass","as","hero","superhero","leetcode","et","code"]));
console.log(match2(["mass","as","hero","superhero","leetcode","et","code"]));
console.log(matching3(["mass","as","hero","superhero","leetcode","et","code"]));


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// FRI
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.


function stringEncode(string){
    var encoded = ""
    var currentChar = string[0]
    var charCount = 0
    for (var i = 0; i < string.length ; i ++){
        if (string[i] == currentChar){
            charCount ++
        }
        if (string[i] != currentChar || i == string.length - 1){
            encoded += currentChar + charCount
            currentChar = string[i]
            charCount = 1
        }
    }
    if (encoded.length <= string.length){
        return encoded
    }
    else {return string}
}

console.log(stringEncode("aaabbcccdaaa"))
console.log(stringEncode("abc"))
console.log(stringEncode("a"))
console.log(stringEncode("bbcc"))

// String Decode

// numbers will only be 1-9

function stringDecode(string){
    var decoded = ""
    for (var i = 0; i < string.length ; i ++){
        if(isNaN(string[i])){
            var char = string[i]
            i++
            for(var j=0; j < parseInt(string[i]); j++){
                decoded += char
            }
        }
    }
    return decoded
}

console.log(stringDecode("a3b2c1d3"))

// String Decode++ (Bonus)

// account for numbers larger than 9

function stringDecodePlusPlusH(str) {
    var decoded = ""
    for (var i = 0; i < str.length ; i ++){
        if(isNaN(str[i])){
            var char = str[i++]
            var no = ''
            // while i is in the string and str[i] is a number
            while(i<str.length&&!isNaN(str[i])){ 
                no+=str[i++]
            }
            i--
            //
            for(var j=0; j < parseInt(no); j++){
                decoded += char
            }
        }
    }
    return decoded
}


// Bad one: only works for 1 and 2 digit numbers, not anything more

console.log(stringDecodePlusPlusH("a23b2"))

function stringDecodePlusPlusTV(str) {
    let decoded = "";
    let number = "";
    let letter = ""
    for (let i = 0; i < str.length; i++) {

        if(!isNaN(parseInt(str[i]))){
            number += str[i];
        }else{
            letter = str[i];
        }

        if(str[i] !== letter){ // not the right quesiton here
            decoded += letter.repeat(parseInt(number));
            number = "";
        }
    }
    return decoded;
}

const str1 = "a23b2";
console.log(stringDecodePlusPlusTV(str1));

function stringDecodePlusPlusC(str) {
    let decoded = ""
    for (let i = 0; i < str.length ; i ++){
        if(isNaN(str[i])){
            let char = str[i]
            i++
            if(isNaN(str[i+1])){
                for(var j=0; j < parseInt(str[i]); j++){
                    decoded += char
                }
            } else {
                let biggerNum = str[i]
                biggerNum += str[i+1]
                i++
                for(var j=0; j < parseInt(biggerNum); j++){
                    decoded += char
                }
            }
        }
    }
    return decoded
}


console.log(stringDecodePlusPlusC("a23b2"))


// const str1 = "a23b2";
// const expected1 = "aaaaaaaaaaaaaaaaaaaaaaabb";