// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var stringArr = string.split(" ");
    var newString = "";
    for(var i = 0; i < stringArr.length; i++){
        newString += stringArr[i][0]
    }
    return newString
}
console.log(acronyms("Live From Saturday Night Live"))

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS

function stringReverse(string){
    var newString = ""
    for(var i = newString.length-1; i >= 0; i--){
        newString += string[i]
    }
    return newString
}
console.log(stringReverse("HELLO"))


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//













// TUE

// Group Attempt: 
function parensValid(string){
    //check ratio > ( needs )
    //for loop? iterate over the array and check that para are paired
    //use booleans? 
    var count = 0;
    for (var i = 0; i < string.length; i++) {
// ( = +1, ) = -1
    if (string[i] = "(" /* || "[" || "{"*/) {
        count+=1}
    else if (string[i] = ")" /* || "]" || "}" */) {
        count+= -1}
}
    if (count == 0) {
        console.log("True")}
    else {
        console.log("False")}
}
console.log(parensValid("I went (to the) mall( and then i ( did this))"))


// Instructor Attempt:
function parensValid(string){
    // EARLY EXIT
    if(string.length % 2 != 0){
        return false
    }
    var counter = 0
    // iterate through string
    // for (var i = 0; i < string.length; i++) {
    //     string[i]}

    for (var char of string){
        if(char == "("){
            counter++
        }
        else if(char == "("){
            counter--
        }
        if (counter < 0){
            return false
        }
    }
    if(counter == 0){
        return true
    }
    else{
        return false
    }
}
console.log(parensValid("(())"))

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){
    var braceStack = []
    var checker = {
        "(" : ")",
        "{" : "}"
        "[" : "]"
    }
    for(var char of string){
        if(char == "(" || char == "{" ||  char == "["){
            braceStack.push(char)
        }
        else{
            if(checker[braceStack[braceStack.length - 1]] == char){
                braceStack.pop()
            }
            else{
                return false
            }
        }
    }
}

// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//










// WED

function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] == string[string.length - i - 1]) {
            continue
        }
        else { return false }
    }
    return true
}

console.log(isPalindrome("HELLO"))
console.log(isPalindrome("KAYAK"))
console.log(isPalindrome("TACOCAT"))
console.log(isPalindrome("HSKWSHSH"))


// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }
    var dict = {}
    for (var i=0; i < string1.length; i++) {
        if (string1[i] in dict) {
            dict[string1[i]] += 1
        }
        else {
            dict[string1[i]] = 1
        }
    }
    for (var i=0; i < string2.length; i++) {
        if (string2[i] in dict) {
            dict[string2[i]] -= 1
            if (dict[string2[i] < 0]) {
                return false
            }
        }
        else {
            return false
        }
    }
    return true
}
console.log(isAnagram("ATE", "TEA"))
console.log(isAnagram("LISTEN", "SILENT"))
console.log(isAnagram("LISTEN", "SILENZ"))
console.log(isAnagram("DEER", "REDD"))
console.log(isAnagram("DEER", "REDDD"))

// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//












// THUR

function bookIndex(array) {
    var indexList = []
    var x = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1] - 1){
            var dash = ""
            dash += array[i]
            while(array[i] == (array[i + 1] - 1)){
                i++
            }
            dash += "-"
            dash += array[i]
            indexList.push(dash)
        }
        else {
            indexList.push(array[i].toString())
        }
        // else if (array[i] == array[i + 1]){
            
        // }
        // while (array[i] == array[i + 1]) {}
    }
    return indexList
}
console.log(bookIndex([1, 13, 14, 15, 16, 17, 36, 37, 38, 70]))

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
















// FRI

// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':3
// }

// My Version: //


function minCoinChange(num){
    var pocket = {
        'quarters' : 0,
        'dimes' : 0,
        'nickels' : 0,
        'pennies' : 0
    }
    // for (var j=0; j<=num; j++){
        if (num>=25){
            for (i=num; i>=25; i-=25){
                pocket['quarters']++;
                num-=25;
            }}
        if (num>=10){
            for (k=num; k>=10; k-=10){
                pocket['dimes']++;
                num-=10;
            }}
        if (num>=5){
            for (l=num; l>=5; l-=5){
                pocket['nickels']++;
                num-=5;
            }}
        if (num>=1){
            for (m=num; m>=1; m-=1){
                pocket['pennies']++;
                num-=1;
            }}
    console.log(pocket);
}

minCoinChange(207);

// Teacher's Version: //

function minCoinChange(num){
    var obj = {}
    obj['quarters'] = Math.floor(num / 25) // calculates how man quarters goes into num
    num = num % 25
    obj['dimes'] = Math.floor(num / 10)
    num = num % 10
    obj['nickels'] = Math.floor(num / 5)
    num = num % 5
    obj['pennies'] = num
    return obj
}

console.log(minCoinChange(321))





// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED


function invertObj(obj) {
    var invertObj = {}
    for (var [key,value] of Object.entries(obj)){
        invertObj[value] = key
    }
    return invertObj
}

var dict1 = {
    'A':"ONE",
    'B':"TWO",
    'C':"THREE"
    }

console.log(invertObj(dict1))


// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }
