
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
// THURS
// ------------------------------------------------------------------------------------------------------------------------------------------------------
