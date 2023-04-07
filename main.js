var calNow = document.querySelector("#calcValues");
var salesPrice = document.querySelector("#sales-price");
var downPaymnt = document.querySelector("#down-payment");
var intereRate = document.querySelector("#int-rate");
var paymentPerYear = 12;
var loanAmount;

//results
var resInterest = document.getElementById('res-interest');
var resInsurance = document.getElementById('res-insurance');
var resMortgage = document.getElementById('res-mortgage');
var resTPay = document.getElementById('res-totalPay');

function resLoanAmount(salesPrice, downPayment) {
    var intDownPayment = downPayment / 100;
    var result = salesPrice * intDownPayment;
    result = salesPrice - result;
    return result;
}

function calcInsurance(salesPrice) {
    var intBornedInsu = (0.5 / 100);
    return (salesPrice * intBornedInsu) / paymentPerYear;
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
    var intBurnedResult = 6.5 / 100;
    loanAmount = resLoanAmount(+salesPrice.value, +downPaymnt.value);
    console.log('Loan amount:', loanAmount);
    console.log('sales price:', calcInsurance(+salesPrice.value).toFixed(2));
    console.log('taxes:', calcProperyTaxes(+salesPrice.value).toFixed(2));
    console.log('Mortgage:', calcMortgageInsurance(+loanAmount).toFixed(2));
    console.log('Interest rate:', PAGO(+loanAmount, +intBurnedResult, 30, +paymentPerYear).toFixed(2));
    var result = calcProperyTaxes(+salesPrice.value) +
        PAGO(+loanAmount, +intBurnedResult, 30, +paymentPerYear) +
        calcInsurance(+salesPrice.value) +
        calcMortgageInsurance(loanAmount);
    resInterest.innerHTML = "$ " + PAGO(+loanAmount, +intBurnedResult, 30, +paymentPerYear).toFixed(2);
    resInsurance.innerHTML = "$ " + calcInsurance(+salesPrice.value).toFixed(0);
    resMortgage.innerHTML = "$ " + calcMortgageInsurance(loanAmount).toFixed(2);
    resTPay.innerHTML = "$ " + result.toFixed(0);
});
