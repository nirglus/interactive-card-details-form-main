const holderNameInp = document.getElementById("holderName");
const cardNumInp = document.getElementById("cardNum");
const expDateMInp = document.getElementById("expDateM");
const expDateYInp = document.getElementById("expDateY");
const cvcInp = document.getElementById("cvc");

const cvcDisp = document.getElementById("cvcDisplay");
const cardNumDisp = document.getElementById("cardNumDisplay");
const holderNameDisp = document.getElementById("cardHoldName");
const expDateMDisp = document.getElementById("mmDisplay");
const expDateYDisp = document.getElementById("yyDisplay");
const confirmBtn = document.getElementById("confirm");
const continueBtn = document.getElementById("complete");

const cardForm = document.getElementById("cardForm");
const completeDisp = document.getElementById("completeSection");

function resetInps(){
    let formInputs = document.querySelectorAll("input");
    formInputs.forEach(inp => inp.value = '');
    cvcDisp.innerHTML = '000';
    cardNumDisp.innerHTML = '0000 0000 0000 0000';
    holderNameDisp.innerHTML = 'Jane Appleseed';
    expDateMDisp.innerHTML = '00';
    expDateYDisp.innerHTML = '00';
}

function validateCardNumber(){
    const cardNumber = cardNumInp.value.trim().replace(/\s/g, '');
    return /^\d+$/.test(cardNumber);
}


document.addEventListener("input", (event) =>{
    holderNameDisp.innerHTML = holderNameInp.value.length == 0 ? 'Jane Appleseed' : holderNameInp.value;
    cardNumDisp.innerHTML = 
    cardNumInp.value.length == 0 ? '0000 0000 0000 0000' :
     cardNumInp.value.replace(/\D+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

    cvcDisp.innerHTML = cvcInp.value.length == 0 ? '000' : cvcInp.value;
    expDateMDisp.innerHTML = expDateMInp.value == 0 ? '00' : expDateMInp.value;
    expDateYDisp.innerHTML = expDateYInp.value == 0 ? '00' : expDateYInp.value;
    if (event.target === cardNumInp) {
        cardNumInp.addEventListener('keydown', (e) => {
          if (e.key === ' ') {
            e.preventDefault();
          }
        });
      }
});

cardForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    cardForm.style.display = "none";
    completeDisp.classList.remove("hidden");
});

continueBtn.addEventListener("click", ()=>{
    completeDisp.classList.add("hidden");
    cardForm.style.display = "flex";
    resetInps();
});
