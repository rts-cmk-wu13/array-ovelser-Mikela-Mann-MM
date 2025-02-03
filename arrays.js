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
    
    console.log("Opgave 1", newNumbers);*/

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

// --- opgave 4a ---

//The find() method of Array instances returns the 
//first element in the provided array that satisfies 
//the provided testing function. If no values satisfy 
//the testing function, undefined is returned.

function findBagheera(cat) {
    return cat.name === "Bagheera";
}

let foundCat = catsArray.find(findBagheera);

console.log("Opgave 4a", foundCat);

// --- opgave 4b ---

function findSalem(cat) {
    return cat.name === "Salem";
}

let foundCat2 = catsArray.find(findSalem);

console.log("Opgave 4b", foundCat);

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

// --- opgave 6 ---

//reduce() – Reducerer et array til én enkelt værdi
// Bruges til at kombinere alle elementer i et array til én samlet værdi.

function concatenateDogs(accumulator, dog) {
    return accumulator + dog;
}

let dogString = dogsArray.reduce(concatenateDogs, "");

console.log("Opgave 6", dogString)

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


// --- Ekstra opgave ---

function sumNumbers(accumulator, num) {
    return accumulator + num;
}

let totalSum = numbersArray.reduce(sumNumbers, 0);

console.log("Ekstra-opgave", totalSum);

}); // ends DOMContentLoaded
