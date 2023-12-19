//-------- HOMEWORK 1 ----------------


//   way 1 ---------
// let storyString = ['Mario', 'excited', 'walking'];

// function tellStory(storyStringArray) {
//     let story = (`This is ${storyString[0]}. ${storyString[0]} is a nice person. Today he is ${storyString[1]}. He is ${storyString[2]} his dog all day.The end`);
//     return story;  
// }
// console.log(tellStory(storyString));

//  way 2 ---------

// function tellStory(name, mood, activity) {
//     let storyTemplate = (`This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} his dog all day.The end`);
//     return storyTemplate;  
// }
// console.log(tellStory('Mario', 'excited', 'walking'));

//   way 3 ----------

// function tellStory(name, mood, activity) {
//     console.log((`This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day.The end`));
//     return;
// }
// tellStory('Mario', 'excited', 'walking his dog');
// tellStory('Bruno', 'depressed', 'walking by himself');


// ----------------------------- HOMEWORK 2 -------------------------


// ------- FUNCTION number 1 ---------

// function sumOfNumbersArray(array) {
//     let total = 0;
//     for (let num of array) {
//         total += num;
//     }
//     return total;
// }
// let result1 = sumOfNumbersArray([1, 5, 2, 2, 10]);
// console.log(result1);


// ------  FUNCTION number 2 ------


// function validateNumber(array) {
//     let total = 0;

//     for (let num of array) {
//         if (typeof num !== "number") {
//             alert('Error. One of the values is not a number');
//             return NaN;
//         }
//         else {
//             total += num;
//         }
//     }
//     return total;
// }
// let myArray = [5, 10, 15, 25, 50, ];
// let result1 = validateNumber(myArray);
// console.log(result1);


// ----------- HOMEWORK 3 -----------


// function stringSum(stringArray) {
//     return stringArray.join(" ");
// }

// let storyStringElements = ["I", "barely", "understand", "what", "am", "i", "doing", ", but", "i", "keep", "grinding."];
// console.log(stringSum(storyStringElements));


// -------- HOMEWORK 4 -----------
// i dont get it


// for (let i = 1; i <= 20; i++) {
//     console.log((i));
//     if (i % 2 == 0) {
//         console.log('\n');
//     } else {
//         console.log("");
//     }

// }


// -------- HOMEWORK 5 ---------


// function sumMinPlusMax(array) {
//     let lastLargestNumber = -Infinity;
//     let lastSmallestNumber = +Infinity;

//     for (i = 0; i <= array.length; i++) {
//         if (typeof array[i] == 'number') {
//         if (array[i] > lastLargestNumber) {
//             lastLargestNumber = array[i];
//         }
//         if (lastSmallestNumber > array[i]) {
//             lastSmallestNumber = array[i];
//         }
//         // if (typeof [lastSmallestNumber, lastLargestNumber == 'number']) {
//         //     minMaxSum = lastLargestNumber + lastSmallestNumber;
//         // }
//     }
// }
//     let minMaxSum = lastLargestNumber + lastSmallestNumber;
//     return [`Min: ${lastSmallestNumber}, Max: ${lastLargestNumber}, Sum: ${minMaxSum}`];
// }

// let arr1 = [3, 5, 40, 2, 11, 12, 15, 50];
// let arr2 = [1, 5, 40, 8, 11, 12, 15, 100];
// console.log(sumMinPlusMax([5,3,3,51,2,23,24,1,99, 'mario', true, false, {name: 'Adriano'}, undefined, null, NaN]));


// ------------ HOMEWORK 6 --------------


// let firstName = ['Mario', 'Dragan', 'Viktor'];
// let surName = ['Balotelli', 'Mirkovic', 'Dabov'];

// function joinNameSurname(arr1, arr2) {

//     for (i = 0; i < Math.min(arr1.length, arr2.length); i++) {
//         let firstPlusLast = `${i + 1}. ${arr1[i]} ${arr2[i]}`
//         fullName.push(firstPlusLast);
//     }
//     return fullName;
// }
// let fullName = [];
// console.log(joinNameSurname(firstName, surName));