

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// MON
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};


const ourItems = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function findObjectsFilter(search, items) {
    returnArray = [];
    let searchKeys = Object.keys(search);
    // take items and look through our search to see which key value pairs match
    for (i=0; i<items.length; i++){
        for (j=0; j<searchKeys.length; j++){
            let searchTerm = searchKeys[j]
            if (items[i].searchTerm == search.searchTerm){
                returnArray.push(items[i])
            }
        }
    }
    // push each object that matches to our returnArray
    return returnArray;
}


function findObjectsFilterClassmateVersion(search, items) {
    const keys = Object.keys(search);
    let output = [];

    for(var i=0; i<items.length; i++){
        let match = true;
        for(var j=0; j<keys.length; j++){
            if( (!keys[j] in items[i]) || (items[i][keys[j]] != search[keys[j]]) ){
                console.log("doesn't match");
                match = false;
                break;
            }
        }
        if(match){
            output.push(items[i]);
        }
    }
    return output;
}


function findObjectsFilterTV(search, items) {
    // put all the keys for the search object into an array
    const searchKeys = Object.keys(search);

    // filter the items
    return items.filter(item => {
        // for each item in items
        // for every key in searchKeys
        for (const key of searchKeys) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== search[key]) {
                return false;
            }
        }
        // if the for loop returns no falses, return true
        return true;
    })
}

console.log(findObjectsFilter(searchFor, ourItems));



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// TUES
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const students = [{
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) {
    // separate the keys
    const keys = Object.keys(updatedVals);

    // loop over the collection and look at each document
    for (const item of collection) {
        // match ids
        if (item.id === id) {
            // loop through our keys
            for (const key of keys) {
                // only update keys that exist on the found object
                if (item.hasOwnProperty(key)) {
                    item[key] = updatedVals[key];
                }
            }
            return item;
        }
    }
    // above return didn't run so nothing was found
    return null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students))
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students))
// Output: {
    //   id: 1,
    //   name: "student1",
    //   isLateToday: true,
    //   lateCount: 16,
    //   redBeltStatus: false
    // }
console.log(findByIdAndUpdate(5, {}, students))
// Output: null




// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
    name: "Sulforaphane",
    treatableSymptoms: [
        "dementia",
        "alzheimer's",
        "inflammation",
        "neuropathy",
    ],
},
{
    name: "Longvida Curcumin",
    treatableSymptoms: [
        "pain",
        "inflammation",
        "depression",
        "arthritis",
        "anxiety",
    ],
},
{
    name: "Hericium erinaceus",
    treatableSymptoms: [
        "anxiety",
        "cognitive decline",
        "depression"],
},
{
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
        "ageing",
        "low NAD",
        "obesity",
        "mitochondrial myopathy",
        "diabetes",
    ],
},
{
    name: "PainAssassinator",
    treatableSymptoms: [
        "pain",
        "inflammation",
        "cramps",
        "headache",
        "toothache",
        "back pain",
        "fever",
    ],
},
];

function webMD(ailments, meds) {
    // let sympTracker = {med1 :2, med2: 3, med3:4};
    // let sympTracker = {1 : [med1, med2], 2 : [med3]};
    let sympTracker = {};
    let desiredMeds = [];
    for (const med of meds){
        for (let i=0; i < ailments.length; i++){
            for (let j=0; j < med["treatableSymptoms"].length; j++){
            if (ailments[i] == med["treatableSymptoms"][j]){
                // {med1 :1}
                if (!med["name"] in sympTracker){
                sympTracker[med["name"]] = 1;
                console.log(sympTracker[med["name"]]);
                } else{
                sympTracker[med["name"]] += 1;
                console.log("hi");
                }
            }
            }
        }
    }
    return sympTracker;
}


console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));

function webMDTV1(ailments, meds) {
    // set a max
    let maxSymptomMatchCount = 0;

    // set a map
    const ailmentsMap = {};
    let matchedMeds = [];

    // create map of ailments to avoid relooping
    for (const ailment of ailments) {
        ailmentsMap[ailment] = true;
    }
    // {pain: true, depression: true}

    // loop your meds..
    for (const med of meds) {
        let symptomsMatchCount = 0;

        // loop the symptoms of each med...
        for (const symptom of med.treatableSymptoms) {
            // check if symptom is in our ailmentsMap
            if (ailmentsMap.hasOwnProperty(symptom)) { // 0(1)
                symptomsMatchCount++;
            }
        }

        // so we matched symptoms from our ailment to this med...
        if (symptomsMatchCount > 0) {
            // if they're equal to our max, add the med, it's good
            if (symptomsMatchCount === maxSymptomMatchCount) {
                matchedMeds.push(med.name);
                // if they're more than our max...
            } else if (symptomsMatchCount > maxSymptomMatchCount) {
                // update the max, toss the entire old array of matched meds
                // start a new array with this better med as the first element
                maxSymptomMatchCount = symptomsMatchCount;
                matchedMeds = [med.name];
            }
        }
    }

    return matchedMeds;
}

// if you come up with a better way to indent this mess, make a copy!

const webMDfunctional = (ailments, medications) =>
    medications
            .filter(medicine =>  // filter medications, look at each
                ailments.every(sym => // loop our ailments, test each one with .every
                    medicine.treatableSymptoms.includes(sym) // => check if treatable
                )
            )
            .map(({name}) => name); // map the result and only keep names

// .every checks each element with a test and returns true if all the elements pass
// think questions like "does every number divide by 5 in this list of numbers?"


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// THURS
// ------------------------------------------------------------------------------------------------------------------------------------------------------

/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200
};

const available = {
    "organic fat": 990,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'


function getMaxServings(recipe, ingredients) {
    let servingsCount = 0;
    for (ingredient in recipe){
        if (!(ingredient in ingredients)){
            return 0;
        }else{
            let tempCount = Math.floor(ingredients[ingredient]/recipe[ingredient])
            if (!servingsCount == 0) {
            if (servingsCount > tempCount){
                servingsCount = tempCount;
            }
            } else {
            servingsCount = tempCount;
            }
        }
    }
    return servingsCount;
}

console.log(getMaxServings(recipe, available));

function getMaxServingsFunctional(recipe, ingredients) {
    return (
        Math.min(
        ...Object.entries(recipe).map(
            ([available, amountNeeded]) => {
            if (!ingredients[available]){
                return 0;
            } else {return (ingredients[available] / amountNeeded)}}
        )
        )
    );
}

console.log(getMaxServingsFunctional(recipe, available));

const getMaxServingsFunctionalTV = (recipe, available) =>
        Math.min(...Object.entries(recipe).map(([key, val]) => available[key] / val)) || 0;
