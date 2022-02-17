// Div for showing error message
const errMsg = document.querySelector(".err_msg");
const pElem = document.createElement("p");
let throwErr = errMsg.appendChild(pElem);

function gettingInputValue(id) {
   let inputIdVal = document.getElementById(id + "-input");
   inputIdVal = inputIdVal.value;
   const inputVal = parseFloat(inputIdVal);
   return inputVal;
}

function inputValidation() {
   // All Input Values
   let incomeInput = document.getElementById("income-input").value;
   let foodInput = document.getElementById("food-input").value;
   let rentInput = document.getElementById("rent-input").value;
   let clothesInput = document.getElementById("clothes-input").value;

   const incomeValue = gettingInputValue("income");
   const foodValue = gettingInputValue("food");
   const rentValue = gettingInputValue("rent");
   const clothesValue = gettingInputValue("clothes");

   // Conditions
   if (incomeInput == "") {
      throwErr.innerText = "Please insert your income value";
   } else if (isNaN(incomeValue) && typeof incomeInput != 'number') {
      throwErr.innerText = "Income value should be numbers";
   } else if (incomeValue < 0) {
      throwErr.innerText = "Negative value are not alllowed in income";
   } else if (foodInput == "") {
      throwErr.innerText = "Please insert your food value";
   } else if (isNaN(foodValue)) {
      throwErr.innerText = "Food value should be number";
   } else if (foodValue < 0) {
      throwErr.innerText = "Negative value are not alllowed in food";
   } else if (rentInput == "") {
      throwErr.innerText = "Please insert your rent value";
   } else if (isNaN(rentValue)) {
      throwErr.innerText = "Rent value should be number";
   } else if (rentValue < 0) {
      throwErr.innerText = "Negative value are not alllowed in rent";
   } else if (clothesInput == "") {
      throwErr.innerText = "Please insert your clothes value";
   } else if (isNaN(clothesValue)) {
      throwErr.innerText = "Clothes value should be number";
   } else if (clothesValue < 0) {
      throwErr.innerText = "Negative value are not alllowed in clothes";
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
      document.querySelector('.total_expense').innerText = "";
      document.querySelector('.total_balance').innerText = "";
   } else {
      document.querySelector('.total_expense').innerText = totalExpense;
      document.querySelector('.total_balance').innerText = incomeValue - totalExpense;
      throwErr.innerText = "";
   }
}

document.getElementById("calc_btn").addEventListener("click", function () {
   return inputValidation();
});


// extra saving information
document.getElementById('saveBtn').addEventListener('click', function () {
   // saving input value
   const savinginput = document.getElementById("saving-input").value;

   // for showing error message in saving section;
   const showErrInSaving = document.querySelector('.saving_amount_err');
   let finalAmount = document.querySelector('.final_amount');

   const remainingBalance = document.getElementById("remaining_balance");

   let totalBalance = document.querySelector('.total_balance').innerText;
   totalBalance = parseFloat(totalBalance);

   let saveInputValue = gettingInputValue("saving");
   let incomeAmount = gettingInputValue("income");
   const totalSave = Math.floor((saveInputValue / 100) * incomeAmount);

   // checking condition
   if (savinginput == "") {
      showErrInSaving.innerText = "Please enter value";
      finalAmount.innerText = "";
      remainingBalance.innerText = "";
   } else if (isNaN(saveInputValue) || typeof saveInputValue != "number") {
      showErrInSaving.innerText = "Only numbers are allowed";
      finalAmount.innerText = "";
      remainingBalance.innerText = "";
   } else {
      if (totalSave > totalBalance) {
         showErrInSaving.innerText = "Saving value should not be greater than total balance";
         finalAmount.innerText = "";
         remainingBalance.innerText = "";
      } else {
         finalAmount.innerText = totalSave;
         remainingBalance.innerText = totalBalance - totalSave;
         document.querySelector('.saving_amount_err').innerHTML = "";
      }
   }
});