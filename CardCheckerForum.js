// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


///checks if Card number passed is valid.
function validateCred(isValid) {
  let cardCopy = isValid.slice(); // creates a clone of array passed.
  for (let i = cardCopy.length - 2; i >= 0; i -= 2) {
    // iterates backwards and multiples every other n by 2, subtracts 9 if n passed is > 9
    cardCopy[i] *= 2;
    if (cardCopy[i] > 9) {
      cardCopy[i] -= 9;
    }
  }

  let cardSum = cardCopy.reduce((a, b) => a + b); // Uses reduce method to sum up cardCopy.
  let result = cardSum % 10 === 0; // check if the reminder of cardSum /10 is 0
  return result; // returns true or false
}

console.log("Is card number valid?:", validateCred(valid5));

//Finds ivalid CC numbers
function findInvalidCards(isInValid) {
  let inValidCards = []; //Cretes an empty array

  // checks if array passed by isInvalid is vald by passing the argument to validateCred
  for (let i = 0; i < isInValid.length; i++) {
    if (validateCred(isInValid[i]) === false) {
      inValidCards.push(isInValid[i]);
    }
  }
  return inValidCards;
}

console.log("Array of invalid Cards Numbers:", findInvalidCards(batch));

//Find companies whose credit card numbers are invalid
function idInvalidCardCompanies(invalidCards) {
  let cardCompany = []; // Stores CC companies with invalid card numbers
  let getInvalidCards = findInvalidCards(invalidCards); // Passes argument to findInvalidCards for check

  for (let i = 0; i < getInvalidCards.length; i++) {
    let find = getInvalidCards[i].slice(0, 1); // Grabs first n from getInvalidCards
// Checks first n passed against known credit card compaies
    if (find == 3) { 
      cardCompany.push("Amex (American Express)");
    } else if (find == 4) {
      cardCompany.push("Visa"); //if found adds company name to cardCompany
    } else if (find == 5) {
      cardCompany.push("MasterCard");
    } else if (find == 6) {
      cardCompany.push("Discover");
    }
  }
  return cardCompany;
}

console.log("CC companies with invalid numbers:",idInvalidCardCompanies(batch));
console.log('   ');
console.log(':::::::::::::::::::Forum Solution:::::::::::::::::::::::::::::');
console.log('   ');

//Solution for checking Vaild Cards
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
/*const valid = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
//const valid = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const invalid = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
//const invalid = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
//const mystery = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];*/
console.log(luhnCheck(6011144340682905));//Valid Card
console.log(luhnCheck(6011127961777935));//Invalid Card
console.log(luhnCheck(5466100861620239));//Not sure