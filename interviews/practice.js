
// Problem 1


// Java

package com.lenderos.abb.airbackend.freemarker;
public class MathUtils {

    public static double average(int a, int b) {
        return ((a + b) / 2);
    }

    public static void main(String[] args) {
        System.out.println(average(2,1));
    }
}

// Error: Parenthesis

// Javascript

function averageSolver(num1, num2){
    return ((num1+num2)/2);
}

console.log(averageSolver(1,2));



// Problem 2:
// Write a program to find the sum of the first 1000 prime numbers.
// create empty array to put all my prime numbers


function first1000Sum(){
    let primeArray = [2,3,5,7,11];

    let primeSum = 0;

    if (primeArray.length < 1000){
        for (var i=12; i<10000000000000; i++){
            for (var k=i-1; k>1; k--){
                if (i % k == 0){
                    break;
                }
            }
        }
    }

    else {
        for (var j=0; j<primeArray.length-1; j++){
            primeSum += primeArray[i]
        }
        return primeSum;
    }
}

console.log(first1000Sum());


// Problem 3:
// Write a program that given a string, find the longest substrings 
// without repeating characters. Iterate through the given string, 
// find the longest maximum substrings.

function longestSubstring(myString){
    let returnArray = [];
    for (var i=0; i<myString.length-1; i++){
        let mySubstring = myString[i];
        let myDict = { myString[i] : 1};
        for (var j=i+1; j<myString.length-1; j++){
            if (myDict does not have key){
                add myString[j] : 1 to myDict
                mySubstring += myString[k]
            }
            else {
                push mySubstring to returnArray
            }
        }
    }
    return returnArray;
}

console.log(longestSubstring("aaabbccc"));
// return "ab", "bc"
console.log(longestSubstring("abcdee"));
// return "abcde"
console.log(longestSubstring("abccccdeeee"));
// return "abc", "cde"
console.log(longestSubstring("abacdee"));
// return "bacde"


// Problem 4:
// You need to write a simple program to check if a given String 
// is palindrome or not. A Palindrome is a String which is equal to the 
// reverse of itself, e.g., "Bob" is a palindrome because of the reverse 
// of "Bob" is also "Bob."  Though be prepared with both recursive and iterative 
// solution of this problem. The interviewer may ask you to solve without using any 
// library method, e.g. indexOf() or subString() so be prepared for that.


function isPalindrome(s){
    // when string length is odd
    if (s.length % 2 > 0){
        for (var i=0; i<((s.length/2)-1); i++){
            if (s[i] !== s[s.length-i-1]){
                return false
            }
        }
        return true;
    }

    // when string length is even
    else {
        for (var i=0; i<((s.length/2)); i++){
            if (s[i] !== s[s.length-i-1]){
                return false
            }
        }
        return true;
    }
}

console.log(isPalindrome("tdadt"));
console.log(isPalindrome("tddadt"));
console.log(isPalindrome("daad"));
console.log(isPalindrome("daada"));





