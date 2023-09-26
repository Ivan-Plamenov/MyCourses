function cinema(input){
    let screeningType = input[0];
    let numberOfRows = Number(input[1]);
    let numberOfCols = Number(input[2]);
    let pricerPerTicket = 0;

    if (screeningType === 'Premiere'){
        pricerPerTicket = 12.00;
    } else if (screeningType === 'Normal'){
        pricerPerTicket = 7.50;
    } else {
        pricerPerTicket = 5.00;
    }

    income = (numberOfRows * numberOfCols * pricerPerTicket).toFixed(2);
    console.log(`${income} leva`);

}