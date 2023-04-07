import Math from 'Math';
var calNow = document.querySelector("#calcValues");
var paymentPerYear = 12;
var salesPrice;
var downPaymnt;
var intereRate;
var loanAmount

function resLoanAmount(salesPrice: number, downPayment: number) {
    var intDownPayment = downPayment / 100;
    var result = salesPrice * intDownPayment;
    result = salesPrice - result;
    return result;
}

function calcInsurance(salesPrice) {
    var intBornedInsu = (25 / 100);
    return salesPrice * intBornedInsu / paymentPerYear;
}

function calcProperyTaxes(salesPrice) {
    var intBornedTaxes = (1.04 / 100);
    return salesPrice * intBornedTaxes / paymentPerYear;
}

function calcMortgageInsurance(loanAmnt) {
    var intBornedMortgage = (0.55 / 100);
    return loanAmnt * intBornedMortgage / paymentPerYear;
}

function PAGO(amount, interest, PayPerYear, numPerYear) {
  var res = (amount * (interest / numPerYear)) / (1 - (1 + (interest / numPerYear)) ** (-(PayPerYear * numPerYear)));
  return res;
}

calNow.addEventListener("click", function () {
    var intBurnedResult = 6.88 / 100;
    salesPrice = document.querySelector<HTMLInputElement>("#sales-price");
    downPaymnt = document.querySelector<HTMLInputElement>("#down-payment");
    intereRate = document.querySelector<HTMLInputElement>("#int-rate");
    loanAmount = resLoanAmount(+salesPrice!.value, +downPaymnt!.value);
    console.log(PAGO(+loanAmount, +intBurnedResult, 30, +paymentPerYear));
});


function initialValues() {
    document.querySelector("#sales-price").value = '350000'
    document.querySelector("#down-payment").value = 20;
    document.querySelector("#int-rate").value = 6.88
}

initialValues();
