// ---------- HOMEWORK 1 ------------

let justExercise = document.getElementById('first'); 
let divHeading = justExercise.firstElementChild;
let divParagraph = justExercise.children[1];

divHeading.innerHTML = 'Changed by Javascript';
divParagraph.innerHTML = 'Changed ';

let divTwoParagraph = document.getElementsByClassName('second')[0];
let divTwoText = divTwoParagraph.nextElementSibling;
let divTwo = divTwoParagraph.parentElement;

divTwoParagraph.innerHTML = ' Just playing games with it '; 
divTwoText.innerHTML = 'For real';

let divThree = document.getElementsByTagName('div')[2];
let divThreeHeading = divThree.firstElementChild;
let divThreeHeadingTwo = divThree.lastElementChild;

divThreeHeading.innerText = 'Smeneto so Javascript';
divThreeHeadingTwo.innerText = 'smeneto aswell'

// ----------- HOMEWORK 2 -------------

