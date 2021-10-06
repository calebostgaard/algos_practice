// Generate Coin Change
// Change is inevitable (especially when breaking a
// twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute
// and print how to represent that amount with
// smallest number of coins. Common American
// coins are pennies (1 cent), nickels (5 cents),
// dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

// What would you do in front of a register to make change?
// Write the pseudocode!
// Highly suggest trying to make it work for 1 quarter first: can you make 1 quarter (25) in change?

// function makechange(num){
//     var quarters,dimes,nickels,pennies;
//     for (var i=0; i<num; i++)
//         if (num - (25*i) > 25){
//             quarter++;
//         }
//         else if ()        
//         for (var j=0; j<num; j++)
//                     if (num-(25*i)-(10*j)>10){
//                         dimes++;
//                             for (var j=0; j<num; j++)
//                                 if (num-(25*i)-(10*j)>10){
//                                     dimes++;
//     }

// }

// console.log(makechange(94));

// 

function makechange(num){
    var quarters=0;
    var dimes=0;
    var nickels=0;
    var pennies=0;
    // for (var j=0; j<=num; j++){
        if (num>=25){
            for (i=num; i>=25; i-=25){
                quarters++;
                num-=25;
            }}
        if (num>=10){
            for (k=num; k>=10; k-=10){
                dimes++;
                num-=10;
            }}
        if (num>=5){
            for (l=num; l>=5; l-=5){
                nickels++;
                num-=5;
            }}
        if (num>=1){
            for (m=num; m>=1; m-=1){
                pennies++;
                num-=1;
            }}
    console.log(`Quarters ${quarters}\nDimes ${dimes}\nNickels ${nickels}\nPennies ${pennies}`);
}

makechange(207);

// Variation 2: //

function makechange(cents){
    var quarters=0;
    var dimes=0;
    var nickels=0;
    var pennies=0;

    while(cents>0){
        if(cents>=25){
            cents-=25;
            quarters++;
        } else if(cents>=10){
            cents-=10;
            dimes++;
        } else if(cents>=5){
            cents-=5;
            nickels++;
        }else if(cents>=1){
            cents--;
            pennies++;
        }
    }
    console.log(`Quarters ${quarters}\nDimes ${dimes}\nNickels ${nickels}\nPennies ${pennies}`);
}

makechange(207);

// Variation 3: //

function makechange(cents){
    var q=0;
    var d=0;
    var n=0;
    var p=0;
    var remainder=0;
    var remainder2=0;
    var remainder3=0;

    var remainder=(cents%25);
    q=(cents-remainder)/25;

    var remainder2=(remainder%10);
    d=(remainder-remainder2)/10;
    
    var remainder3=(remainder2%5);
    n=(remainder2-remainder3)/5;

    p=remainder3;
    
    console.log(`Quarters ${q}\nDimes ${d}\nNickels ${n}\nPennies ${p}`);
}

makechange(207);


// Second: can you simplify/shorten your code? (Don't erase what you have, work on a copy.)



// Third: add half-dollar (50 cents) and dollar (100
// cents) coins with 40 additional characters or less.

