// EXERCISE 1
for(var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}
console.log(i);


// EXERCISE 2
var a = 20;
function abc(list){
    var a = 15;
    console.log(a);
}
console.log(a);

a = [ [1,2,3], [5,10,20] ];



// EXERCISE 3
function sum(list){
    var sum = list[0];

    for(var i = 0; i <= list.length; i++) {
        sum = sum + list[i];
        console.log(sum);
    }
}

c = sum([1,2,3]);
console.log(c);






var x = 10;
    //write some comment here//
    function myfunction(){
        console.log("Hello World");
    }

    myfunction();
    console.log("Sup Nerds!");
