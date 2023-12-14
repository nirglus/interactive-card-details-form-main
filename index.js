document.addEventListener("input", () =>{
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

    holderNameDisp.innerHTML = holderNameInp.value.length == 0 ? 'Jane Appleseed' : holderNameInp.value;
    cardNumDisp.innerHTML = 
    cardNumInp.value.length == 0 ? '0000 0000 0000 0000' :
     cardNumInp.value.replace(/\D+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

    cvcDisp.innerHTML = cvcInp.value.length == 0 ? '000' : cvcInp.value;
    expDateMDisp.innerHTML = expDateMInp.value == 0 ? '00' : expDateMInp.value;
    expDateYDisp.innerHTML = expDateYInp.value == 0 ? '00' : expDateYInp.value;



})