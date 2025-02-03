document.addEventListener("DOMContentLoaded", function () {
    let catsArray = [
        "Ollie",
        "Sophie",
        "Salem",
        "Tiger",
        "Binx",
        "Pumpkin",
        "Penny",
        "Lenny",
    ];
    let dogsArray = [
        "Barney",
        "Molly",
        "Baxter",
        "Polly",
        "Buddy",
        "Suki",
        "Watson",
    ];
    let fruitsArray = [
        "Banana",
        "Orange",
        "Pineapple",
        "Mango",
        "Plum",
        "Apricot",
    ];
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

    // --- opgave 1 ---

    let newNumbers = numbersArray.filter((num) => num > 20);
    console.log("Opgave 1", newNumbers);

    //The filter() method of Array instances creates a shallow copy 
    //of a portion of a given array, filtered down to just the elements 
    //from the given array that pass the test implemented by the provided function.


    /* uden brug af anonym funktion 
    
    function isGreaterThanTwenty(num) {
        return num > 20;
    }
    
    let newNumbers = numbersArray.filter(isGreaterThanTwenty);
    
    console.log("Opgave 1", newNumbers);
    
    kan også skrives 
    let newNumbers = numbersArray.filter(function(number) {
     return num > 20;
    });
    */

// --- opgave 2 ---

//The push() method of Array instances adds the specified elements 
//to the end of an array and returns the new length of the array.

catsArray.push('Sniffles');
console.log("Opgave 2", catsArray);

// --- opgave 3 ---

//The includes() method of Array instances determines 
//whether an array includes a certain value among its entries, 
//returning true or false as appropriate.

console.log(dogsArray.includes('Trixie'));

console.log(dogsArray.includes('Baxter'));

// let hasTrixie = dogsArray.includes("Trixie");
//console.log(hasTrixie);

/*
The some() method of Array instances tests whether at 
least one element in the array passes the test implemented 
by the provided function. It returns true if, in the array, 
it finds an element for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.


let hasBaxter = dogsArray.some(function(dog) {dog == "Baxter"})
let hasBaxterArrow = dogsArray.some((dog) => dog == "Baxter") */

// --- opgave 4a ---

//The find() method of Array instances returns the 
//first element in the provided array that satisfies 
//the provided testing function. If no values satisfy 
//the testing function, undefined is returned.

function findBagheera(cat) {
    return cat === "Bagheera";
}

let foundCat = catsArray.find(findBagheera);

console.log("Opgave 4a", foundCat);

// let hasBagheera = catsArray.find((cat) => cat == "Bagheera"); 

// --- opgave 4b ---

function findSalem(cat) {
    return cat === "Salem";
}

let foundCat2 = catsArray.find(findSalem);

console.log("Opgave 4b", foundCat2);

// --- opgave 5 ---

//The map() method of Array instances creates
// a new array populated with the results of 
//calling a provided function on every element 
//in the calling array.

function multiplyByThree(num) {
    return num * 3;
}

let newNumbers5 = numbersArray.map(multiplyByThree);

console.log("Opgave 5", newNumbers5);

// let multiplied = numbersArray.map((num) => number * 3)

// --- opgave 6 ---

/* The join() method of Array instances creates and
returns a new string by concatenating all of the elements 
in this array, separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator. */

console.log("Opgave 6", dogsArray.join(""));

// --- opgave 7a & b ---

//The indexOf() method of Array instances returns 
//the first index at which a given element can be 
//found in the array, or -1 if it is not present.

let mangoIndex = fruitsArray.indexOf("Mango");
console.log("Opgave 7a", mangoIndex);

let blaabaerIndex = fruitsArray.indexOf("Blåbær");
console.log("Opgave 7b", blaabaerIndex);

// --- opgave 8 ---

function removePolly(dog) {
    return dog !== "Polly";
}

let updatedDogsArray = dogsArray.filter(removePolly);

console.log("Opgave 8", updatedDogsArray);

/* The splice() method of Array instances changes the contents of an 
array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the 
original array, use toSpliced(). To access part of an array without modifying it, see slice(). */ 

//let deleteIndex = dogsArray.indexOf("Hans")
//if(deleteIndex > -1) dogsArray.splice(dogsArray.indexOf("Polly"),1); 


// --- Ekstra opgave ---

/*The reduce() method of Array instances executes a user-supplied 
"reducer" callback function on each element of the array, in order, 
passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. Otherwise the array element at index 0 
is used as the initial value and iteration starts from the next element (index 1 instead of index 0). */


function sumNumbers(accumulator, num) {
    return accumulator + num;
}

let totalSum = numbersArray.reduce(sumNumbers, 0);

console.log("Ekstra-opgave", totalSum);

// let sum = numbersArray.reduce(function(result, number) {
//    return result + number
// });
// console.log(sum);

}); // ends DOMContentLoaded
