let transfer = document.getElementById("transfer");
let result = document.getElementById("result");
transfer.addEventListener("click", myFunc )


function myFunc() {
    if (document.getElementById("toDollor").checked) {
        toDollor()
    } else if(document.getElementById("toRuble").checked){
        toRuble()
    } else{
        result.innerHTML = "Choose one unit"
    }
}

function toDollor() {
    let soum = document.getElementById("soum").value;
    result.innerHTML = ((soum * 82) / 1000000).toLocaleString("en-IN", {style: 'currency', currency: 'USD'});
}
function toRuble() {
    let soum = document.getElementById("soum").value;
    result.innerHTML = ((soum * 8) / 1000).toLocaleString("eng-IN", {style: 'currency', currency: 'RUB'})
}