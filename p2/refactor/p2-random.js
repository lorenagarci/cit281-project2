/*
CIT 281 Project 2
Name: Lorena Garcia
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log(result);

     // This function returns a single, random, lowercase letter. from the alphabet.
    function getRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }
    for (let i = 0; i < 10; i++) {
        const randomLetter = getRandomLetter();
        console.log(randomLetter);
        }

        function getRandomString(minLength, maxLength) {
            const length = getRandomInteger(minLength, maxLength);
            let randomString = '';
            for (let i = 0; i < length; i++) {
            randomString += getRandomLetter();
        }
    return randomString;
        }
        function getRandomLetter() {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomIndex];
            }
            
            function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
        console.log(getRandomString(10, 20));

        //This function will return a string in ascending order 
        const getSortedString = (string) => string.split ('').sort().join('');