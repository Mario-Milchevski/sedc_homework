let firstDiv = document.getElementById("divId");
let arr1 = [5, 10, 25, 50];

function sumOfNum(array) {
  let result = 0;
  firstDiv.innerHTML = "";
  firstDiv.innerHTML += `<ul>`;
  for (i = 0; i < array.length; i++) {
    result += array[i];
    firstDiv.innerHTML += `<li>Num ${i + 1} : ${array[i]}</li>`;
  }
  firstDiv.innerHTML += `<li>Result: ${result}</li>`;
  firstDiv.innerHTML += `<li>Equasion: ${array.join(" + ")} = ${result}</li>`;
  firstDiv.innerHTML += `</ul>`;
}
sumOfNum(arr1);

// /**
//  *
//  * @param {number[]} array
//  * @param {HTMLElement} firstDiv
//  */