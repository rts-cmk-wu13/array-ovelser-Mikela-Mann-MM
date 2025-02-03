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

catsArray.push('Sniffles');
console.log("Opgave 2", catsArray);



}); // ends DOMContentLoaded
