// Div for showing error message
const errMsg = document.querySelector(".err_msg");
const pElem = document.createElement("p");
let throwErr = errMsg.appendChild(pElem);


document.getElementById("calc_btn").addEventListener("click", function () {
   return inputValidation();
});

function gettingInputValue(id) {
   let inputIdVal = document.getElementById(id + "-input");
   inputIdVal = incomeInput.value;
   const inputVal = parseFloat(inputIdVal);
   return inputVal;
}

function inputValidation() {
   // All Input Values
   let incomeInput = document.getElementById("income-input");
   let foodInput = document.getElementById("food-input");
   let rentInput = document.getElementById("rent-input");
   let clothesInput = document.getElementById("clothes-input");

   const incomeValue = gettingInputValue("income")
   const foodValue = gettingInputValue("food");
   const rentValue = gettingInputValue("rent");
   const clothesValue = gettingInputValue("clothes");

   // Conditions
   if (incomeInput == "") {
      throwErr.innerText = "Please insert your income value";
   } else if (isNaN(incomeValue) && typeof incomeInput != 'number') {
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
      calculateExpenses(incomeValue, foodValue, rentValue, clothesValue);
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


document.getElementById('saveBtn').addEventListener('click', function () {
   let saveInput = document.getElementById("saving-input");
   saveInput = saveInput.value;
   const saveInputValue = parseFloat(saveInput);

   let totalBalance = document.querySelector('.total_balance').innerText;
   const totalBalanceVal = parseFloat(totalBalance);

   let xx = totalBalanceVal / saveInputValue;
   document.querySelector('.final_amount').innerText = xx;

});