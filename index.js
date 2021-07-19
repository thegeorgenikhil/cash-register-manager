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

var list = [2000,500,100,20,10,5,1]


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
    var billAmountValue = billAmount.value;
    var cashGivenValue = cashGiven.value;
    var balanceAmt = cashGivenValue - billAmountValue;
    console.log("clicked")
    for (var i = 0;i < list.length ; i++){
        var element = list[i];
        var currentDenomination = document.getElementById(element);
        currentDenomination.innerText = ""
        returnTable.classList.add("hidden")
        }

    
    if (cashGivenValue.length === 0 || billAmountValue.length == 0){
        resultDiv.innerText = "Enter valid bill amount and cash given to continue";
    }
    else if (balanceAmt < 0){
        resultDiv.innerText = "Cash is less than bill, please enter right amount"
    }
    else if (billAmountValue === cashGivenValue){
        resultDiv.innerText = "No amount should be returned"
    }
    else{
        for (var i = 0;i < list.length ; i++){
            var element = list[i];
            if (balanceAmt >= element){
                var noOfNote = Math.floor(balanceAmt/element);
                balanceAmt = balanceAmt - (noOfNote*element)
                var currentDenomination = document.getElementById(element);
                currentDenomination.innerText = noOfNote
                returnTable.classList.remove("hidden")
            }

        }
    }
}