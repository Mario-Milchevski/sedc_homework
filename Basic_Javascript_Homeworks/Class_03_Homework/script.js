
//Homework 1

//   function parameterTypes(parameter) {
// 	let parameterType = typeof parameter;
// 	return parameterType;
//   }

//   parameterTypes({});
//   parameterTypes(false);
//   parameterTypes(23);
//   parameterTypes('sedc');
//   parameterTypes();

//   	let result1 = parameterTypes({});
//   	let result2 = parameterTypes(false);
//   	let result3 = parameterTypes(23);
//   	let result4 = parameterTypes('sedc');
//   	let result5 = parameterTypes("");
// 	console.log(`The type of ${parameterType} is ${result1}`);


// Homework 2



// function humanToDog (ageInput){
// 	let formula = ageInput * 7;
// 	return formula;
// }
// function dogToHuman (ageInput){
// 	let formula = ageInput / 7;
// 	return formula;
// }

// let input = prompt('Enter H2D for (human to dog) or D2H for (dog to human)');
// let ageInput = parseInt(prompt('Enter Age'));
// if(input === "H2D"){
// 	console.log(`You dog is ${humanToDog(ageInput)} dog age`);
// } else if(input === "D2H"){
// 	console.log(`You dog is ${dogToHuman(ageInput)} human age`);
// } else {
// 	console.log("Error! Warning - Case sensitive!");
// }


// Homework 3

let curBalance = 1000;
alert(`Current balance : ${(curBalance)}MKD`);
let withdrawal = parseInt(prompt(`Enter amount of money to withdraw \n MKD`));

function makeWithdrawal(curBalance, withdrawal) {
	let withdrawalResult = curBalance - withdrawal;
	return withdrawalResult;
}

let newBalance = makeWithdrawal(curBalance, withdrawal);

while (withdrawal == '' || isNaN(withdrawal)) {
withdrawal = parseInt(prompt(`Error: Please enter a valid number \nEnter amount of money to withdraw \n MKD`));
console.log(`Current balance : ${curBalance}MKD`);


}

if (withdrawal > curBalance ) {
	alert(`You do not have sufficient funds to complete the transaction! \nYour current balance is ${curBalance}MKD`);
	withdrawal = parseInt(prompt(`Please enter different amount of money to withdraw \n MKD`));
	console.log(`Money withdrawn :${withdrawal}MKD`);
	console.log(`Remaining balance : ${curBalance - withdrawal}MKD`);

}

else if (withdrawal !== '' && withdrawal !== null && !isNaN(withdrawal) && !(withdrawal > curBalance)) {
	alert('Transaction successful');
	console.log(`Money withdrawn :${withdrawal}MKD`);
	console.log(`Remaining balance : ${newBalance}MKD`);
}

else {
	alert('Error: Please enter a valid number');
    withdrawal = parseInt(prompt(`Enter amount of money to withdraw \n MKD`));

}


