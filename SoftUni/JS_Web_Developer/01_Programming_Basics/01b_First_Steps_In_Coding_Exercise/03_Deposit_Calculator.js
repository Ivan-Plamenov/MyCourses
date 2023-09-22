function calculatorDeposits(input){
    let sumDeposit = Number(input[0]);
    let lenghtDeposit = Number(input[1]);
    let yearlyRate = Number(input[2]) / 100;

    totalAmount = sumDeposit + lenghtDeposit * (( sumDeposit * yearlyRate)/12)
    console.log(totalAmount)
}

// calculatorDeposits(["200","3","5.7"])
// calculatorDeposits(["2350", "6", "7"])