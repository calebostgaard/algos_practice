
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// Given a starting integer and ending integer, return the count of numbers 
// within that inclusive range that do not contain the number "5". The result may 
// contain 5. Start < end always. Both numbers can be negative. Return an integer

var dontGiveMe5 = function(start, end) {
    let count = 0;
    for(let i=start; i<(end+1); i++){
        if (i % 5 == 0){
            if (i % 10 == 0){
                count ++;
            }
        } else count ++
    } return count
};

var dontGiveMe5Dave = function(start, end) {
    let count = 0;
    for(let i=start-1; i<(end+1); i++){
        count = String(i).includes("5") ? count : count + 1;
    } return count
};


console.log(dontGiveMe5Dave(-1, 3));
console.log(dontGiveMe5Dave(2, 11));
console.log(dontGiveMe5Dave(4, 20));


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// FRI
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Given a string of words, find the highest scoring word. 
// Each letter scores according to it's position in the alphabet 
// (a=1, b=2, c=3. etc...) If two words score the same, return 
// the word that appears the earliest.



var highestWord = function(myString) {
    let myWords = myString.split(" ");
    let topWordScore = 0;
    let indexofWord = 0;
    for(let i=0; i<myWords.length; i++){
        let tempWordScore = 0;
        for(let j=0; j<myWords[i].length; j++){
            tempWordScore += myWords[i].toLowerCase().charCodeAt(j) - 96;
        } if (tempWordScore > topWordScore){ 
            topWordScore = tempWordScore;
            indexofWord = i;
        }
    } return myWords[indexofWord]
};


console.log(highestWord("abc def hij"));
console.log(highestWord("Man I need a taxi"));
console.log(highestWord("I love to see volcanoes"));