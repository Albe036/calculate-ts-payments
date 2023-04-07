/* inputs values */
const salesPrice = document.querySelector<HTMLInputElement>("#sales-price");
const downPaymnt = document.querySelector<HTMLInputElement>("#down-payment");
const intereRate = document.querySelector<HTMLInputElement>("#int-rate");
/* calculate button */
const calNow = document.querySelector<HTMLButtonElement>("#calcValues");
/* constant values */
const paymentPerYear = 12;
const rateOne = 0.5;

/* result inputs */
const resInterest = document.getElementById('res-interest') as HTMLHeadingElement;
const resInsurance = document.getElementById('res-insurance') as HTMLHeadingElement;
const resMortgage = document.getElementById('res-mortgage') as HTMLHeadingElement;
const resTPay = document.getElementById('res-totalPay') as HTMLHeadingElement;


function calLoanAmount(salesPrice: number, downPayment: number): number {
    return salesPrice - (salesPrice * (downPayment / 100));
}

function calcInsurance(salesPrice: number, payPerYear: number, rateOnep: number): number {
    const intBornedInsurance = (rateOnep / 100);
    return (salesPrice * intBornedInsurance) / payPerYear;
}

function calcProperyTaxes(salesPrice: number, payPerYear: number): number {
    const intBurnedTaxes = (1.04 / 100);
    return salesPrice * intBurnedTaxes / payPerYear;
}

function calcMortgageInsurance(loanAmnt: number, payPerYear: number): number {
    const intBurnedMortgage = (0.55 / 100);//@to-do comprobar que sea igual a rate1st
    return loanAmnt * intBurnedMortgage / payPerYear;
}

function calInterestRate(amount: number, interest: number, payPerDays: number, numPerYear: number) {
    const numerator = (amount * (interest / numPerYear));
    const denominator = (1 - (1 + (interest / numPerYear)) ** (-(payPerDays * numPerYear)));
    return numerator / denominator;
}

function resTotalPayments(intRate: number, insurance: number, propTaxes: number, mortgageInsu: number) {
    const result = (intRate + insurance + propTaxes + mortgageInsu);
    return result.toFixed(0);
}

function formatResult(resNumber: number) {
    const withOutDec = resNumber.toFixed(0);
    return new Intl.NumberFormat().format(+withOutDec);
}

function writeResult() {
    const intBurnedResult = 6.5 / 100;
    const loanAmount = calLoanAmount(+salesPrice!.value, +downPaymnt!.value);
    const resIntRate = calInterestRate(loanAmount, intBurnedResult, 30, paymentPerYear);
    const resInsurancep = calcInsurance(+salesPrice!.value, paymentPerYear, rateOne);
    const calcPropTaxes = calcProperyTaxes(+salesPrice!.value, paymentPerYear);
    const mortgageInsurance = calcMortgageInsurance(loanAmount, paymentPerYear);
    const totalPayment = resTotalPayments(resIntRate, resInsurancep, calcPropTaxes, mortgageInsurance);
    resInterest.innerHTML = formatResult(resIntRate);
    resInsurance.innerHTML = formatResult(resInsurancep);
    resMortgage.innerHTML = formatResult(mortgageInsurance);
    resTPay.innerHTML = formatResult(+totalPayment);
}

calNow!.addEventListener("click", writeResult);
