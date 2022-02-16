// Div for showing error message
const errMsg = document.querySelector(".err_msg");
const pElem = document.createElement("p");
let throwErr = errMsg.appendChild(pElem);


document.getElementById("calc_btn").addEventListener("click", function () {
   return inputValidation();
});

function inputValidation() {
   // All Input Values
   let incomeInput = document.getElementById("income-input");
   incomeInput = incomeInput.value;
   const incomeValue = parseFloat(incomeInput);

   let foodInput = document.getElementById("food-input");
   foodInput = foodInput.value;
   const foodValue = parseFloat(foodInput);

   let rentInput = document.getElementById("rent-input");
   rentInput = rentInput.value;
   const rentValue = parseFloat(rentInput);


   let clothesInput = document.getElementById("clothes-input");
   clothesInput = clothesInput.value;
   const clothesValue = parseFloat(clothesInput);

   // Conditions
   if (incomeInput == "") {
      throwErr.innerText = "Please insert your income value";
   } else if (isNaN(incomeValue)) {
      throwErr.innerText = "Income value should be numbers";
   } else if (incomeValue < 0) {
      throwErr.innerText = "Negative value are not alllowed";
   } else if (foodInput == "") {
      throwErr.innerText = "Please insert your food value";
   } else if (isNaN(foodValue)) {
      throwErr.innerText = "Food value should be number";
   } else if (foodValue < 0) {
      throwErr.innerText = "Negative value are not alllowed";
   } else if (rentInput == "") {
      throwErr.innerText = "Please insert your rent value";
   } else if (isNaN(rentValue)) {
      throwErr.innerText = "Rent value should be number";
   } else if (rentValue < 0) {
      throwErr.innerText = "Negative value are not alllowed";
   } else if (clothesInput == "") {
      throwErr.innerText = "Please insert your clothes value";
   } else if (isNaN(clothesValue)) {
      throwErr.innerText = "Clothes value should be number";
   } else if (clothesValue < 0) {
      throwErr.innerText = "Negative value are not alllowed";
   } else {
      throwErr.innerText = "";
      return calculateExpenses(incomeValue, foodValue, rentValue, clothesValue);
   }
}

function calculateExpenses(incomeValue, foodValue, rentValue, clothesValue) {
   // Total expenses ammount
   let totalExpense = foodValue + rentValue + clothesValue;

   if (totalExpense > incomeValue) {
      throwErr.innerText = "expense Value greater than income";
   } else {
      document.querySelector('.total_expense').innerText = totalExpense;
      document.querySelector('.total_balance').innerText = incomeValue - totalExpense;
   }
}
