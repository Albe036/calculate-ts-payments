/* inputs values */
var salesPrice = document.querySelector("#sales-price");
var downPaymnt = document.querySelector("#down-payment");
var intereRate = document.querySelector("#int-rate");
/* calculate button */
var calNow = document.querySelector("#calcValues");
/* constant values */
var paymentPerYear = 12;
var rateOne = 0.5;
/* result inputs */
var resInterest = document.getElementById('res-interest');
var resInsurance = document.getElementById('res-insurance');
var resMortgage = document.getElementById('res-mortgage');
var resTPay = document.getElementById('res-totalPay');
function calLoanAmount(salesPrice, downPayment) {
    return salesPrice - (salesPrice * (downPayment / 100));
}
function calcInsurance(salesPrice, payPerYear, rateOnep) {
    var intBornedInsurance = (rateOnep / 100);
    return (salesPrice * intBornedInsurance) / payPerYear;
}
function calcProperyTaxes(salesPrice, payPerYear) {
    var intBurnedTaxes = (1.04 / 100);
    return salesPrice * intBurnedTaxes / payPerYear;
}
function calcMortgageInsurance(loanAmnt, payPerYear) {
    var intBurnedMortgage = (0.55 / 100); //@to-do comprobar que sea igual a rate1st
    return loanAmnt * intBurnedMortgage / payPerYear;
}
function calInterestRate(amount, interest, payPerDays, numPerYear) {
    var numerator = (amount * (interest / numPerYear));
    var denominator = (1 - Math.pow((1 + (interest / numPerYear)), (-(payPerDays * numPerYear))));
    return numerator / denominator;
}
function resTotalPayments(intRate, insurance, propTaxes, mortgageInsu) {
    var result = (intRate + insurance + propTaxes + mortgageInsu);
    return result.toFixed(0);
}
function formatResult(resNumber) {
    var withOutDec = resNumber.toFixed(0);
    return new Intl.NumberFormat().format(+withOutDec);
}
function writeResult() {
    var intBurnedResult = 6.5 / 100;
    var loanAmount = calLoanAmount(+salesPrice.value, +downPaymnt.value);
    var resIntRate = calInterestRate(loanAmount, intBurnedResult, 30, paymentPerYear);
    var resInsurancep = calcInsurance(+salesPrice.value, paymentPerYear, rateOne);
    var calcPropTaxes = calcProperyTaxes(+salesPrice.value, paymentPerYear);
    var mortgageInsurance = calcMortgageInsurance(loanAmount, paymentPerYear);
    var totalPayment = resTotalPayments(resIntRate, resInsurancep, calcPropTaxes, mortgageInsurance);
    resInterest.innerHTML = formatResult(resIntRate);
    resInsurance.innerHTML = formatResult(resInsurancep);
    resMortgage.innerHTML = formatResult(mortgageInsurance);
    resTPay.innerHTML = formatResult(+totalPayment);
}
calNow.addEventListener("click", writeResult);
