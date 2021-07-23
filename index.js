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
var errorOutputDiv = document.querySelector("#error-output")

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
    returnTable.classList.add("hidden")
    errorOutputDiv.classList.add("hidden")
    
    if (cashGivenValue.length === 0 || billAmountValue.length == 0){
        errorOutputDiv.innerHTML = "Enter valid bill amount and cash given to continue";
        errorOutputDiv.classList.remove("hidden");
    }
    else if (balanceAmt < 0){
        errorOutputDiv.innerHTML = "Cash is less than bill, please enter right amount";
        errorOutputDiv.classList.remove("hidden");

    }
    else if (balanceAmt === 0){
        errorOutputDiv.innerHTML = "No amount should be returned";
        errorOutputDiv.classList.remove("hidden");

    }
    else if (balanceAmt > 0){
        for (var i = 0;i < 7 ; i++){
            var element = list[i];
            var currentDenomination = document.getElementById(element);
            currentDenomination.innerHTML = "";
            if (balanceAmt >= element){
                var noOfNote = Math.floor(balanceAmt/element);
                balanceAmt = balanceAmt - (noOfNote*element);
                currentDenomination.innerHTML = noOfNote;
                returnTable.classList.remove("hidden");
            }

        }
    }
}