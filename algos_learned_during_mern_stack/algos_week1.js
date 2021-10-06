// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// MON
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for (var j=0; j<arr.length; j++){
        for (var i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}
var myArray = [2,6,4,9,1,3];
console.log(bubbleSort(myArray));

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
console.log(selectionSort([2,6,4,-1,9,3]));


// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png




// ------------------------------------------------------------------------------------------------------------------------------------------------------
// TUES
// ------------------------------------------------------------------------------------------------------------------------------------------------------



// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sort

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {

        // save the current element
        var temp = arr[i];

        // save the previous index
        var j = i - 1;

        // while j is within the bounds of the array
        // and that element is larger than temp
        while (j >= 0 && arr[j] > temp) {
            // shift to the left and decrement j
            arr[j + 1] = arr[j];
            j--;
        }
        // when the loop completes, move the temp into the proper location
        arr[j + 1] = temp;
    }
    return arr;
};

myArr = [5,43,8,41,41,86,12]
console.log(insertionSort(myArr))


//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted

// this sort splits the array into two portions (conceptually, not literally)

// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted

// can shift or swap target element until it reaches desired position
// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position availale to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

// swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

// bonus challenge: use destructuring for your swap

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// WED
// ------------------------------------------------------------------------------------------------------------------------------------------------------




// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)


// [88, 22, 44, 12, 99, 111, 9, 15, 49];

function mergeSort(arr) {
    // return arrays of single values
    if (arr.length < 2) {
        return arr;
    }

    // get the middle index, floor it to prevent floats
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // mergeSortedArray called on the result of mergeSort left and right
    return mergeSortedArrays(mergeSort(left), mergeSort(right));
}

// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
    let sort = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            // shift pops from the front, not ideal.
            sort.push(arr1.shift());
        } else {
            sort.push(arr2.shift());
        }
    }

    // takes remainders and squashes them together in cases with one array
    return sort.concat(arr1.slice().concat(arr2.slice()));
}


// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);



// ------------------------------------------------------------------------------------------------------------------------------------------------------
// THURS
// ------------------------------------------------------------------------------------------------------------------------------------------------------


// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif




// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

let swap = (arr, i, j) => {
    // swap two indexes in an array
    [arr[i], arr[j]] = [arr[j], arr[i]]
};

let PartitionLomuto = (arr, left = 0, right = arr.length - 1) => {
    // select a pivot
    const pivot = arr[right];
    // start at the left most index
    let i = left;

    // looping from the left index until the right
    for (let j = left; j < right - 1; j++) {
        // if that value is less than or equal to the pivot
        if (arr[j] <= pivot) {
            // swap!
            swap(arr, i, j);

            // and move i!
            i++;
        }
    }
    // final swap to put the pivot back in the right spot
    swap(arr, i, right);

    // and return it's index
    return i;
}

PartitionLomuto([4, 5, 2, 9, 11, 12, 99, 200])
    //               l                    r
    //                                         p
    //                               i
    //                                         j

function partitionHoare(arr, left, right) {
    if (left === undefined) {
        left = 0;
    }

    if (right === undefined) {
        right = arr.length - 1;
    }

    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return left;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// FRI
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Array: Quick Sort
// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif
// https://github.com/brendan-codes/march-mern-2021/tree/master/algos

// Create a function that uses yesterday’s partition to sort an array in-place.
//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)


//   Steps:
// - base case: if left is greater than right, return
// - start by partitioning the full array (use the previously built partition algo, from the left to the right)
// - using the pivot as a new center, call quicksort again for left side of the array (left of new pivot idx)
//   and the right side of the array (right of new pivot idx)


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const pivot = PartitionLomuto(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot, right);

    return arr;
}

let swap = (arr, i, j) => {
    // swap two indexes in an array
    [arr[i], arr[j]] = [arr[j], arr[i]]
};

let PartitionLomuto = (arr, left, right) => {
    if (left === undefined) {
        left = 0;
    }

    if (right === undefined) {
        right = arr.length - 1;
    }
    // select a pivot
    const pivot = arr[right];
    // start at the left most index
    let i = left;

    // looping from the left index until the right
    for (let j = left; j < right - 1; j++) {
        // if that value is less than or equal to the pivot
        if (arr[j] <= pivot) {
            // swap!
            swap(arr, i, j);

            // and move i!
            i++;
        }
    }
    // final swap to put the pivot back in the right spot
    swap(arr, i, right);

    // and return it's index
    return i;
}

let partitionHoare = (arr, left, right) => {
    if (left === undefined) {
        left = 0;
    }

    if (right === undefined) {
        right = arr.length - 1;
    }

    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return left;
}