// INPUT ELEMENTS
var billAmount = document.querySelector("#bill-amount")
var cashGiven = document.querySelector("#cash-given")

// BUTTON ELEMENTS
var nextBtn = document.querySelector("#next-Btn")
var checkBtn = document.querySelector("#check-Btn")

// Message Divs
var cashGivenDiv = document.querySelector(".cash-given")
var billAmountNotValidDiv = document.querySelector("#bill-amount-not-valid")
var resultDiv = document.querySelector("#result")

// TABLE
var returnTable = document.querySelector("#return-table")


nextBtn.addEventListener("click",clickHandlerNext)
checkBtn.addEventListener("click",clickHandlerCheck)



function clickHandlerNext(){
    if (billAmount.value.length === 0){
        billAmountNotValidDiv.innerText = "Enter valid bill amount"
    }
    else{
        cashGivenDiv.classList.remove("hidden")
        billAmountNotValidDiv.classList.add("hidden")
    }
}

function clickHandlerCheck(){
    billAmountValue = billAmount.value;
    cashGivenValue = cashGiven.value;
    
    if (cashGivenValue.length === 0 || billAmountValue.length == 0){
        resultDiv.innerText = "Enter valid bill amount and cash given to continue";
    }
    else if (billAmountValue > cashGivenValue){
        resultDiv.innerText = "Cash is less than bill, please enter right amount"
    }
    else if (billAmountValue === cashGivenValue){
        resultDiv.innerText = "No amount should be returned"
    }
    else{
        returnTable.classList.remove("hidden")
    }
}