function computerShopping(input){
    let budget = Number(input[0]);
    let amountVGA = Number(input[1]);
    let amountCPU = Number(input[2]);
    let amountRAM = Number(input[3]);

    priceVGA = amountVGA * 250;
    priceCPU = priceVGA * 0.35 * amountCPU;
    priceRAM = priceVGA * 0.1 * amountRAM;
    totalPrice = priceVGA + priceCPU + priceRAM;
    
    if (amountVGA > amountCPU){
        discount = totalPrice * 0.15;
        totalPrice = totalPrice - discount;
    }

    absMoney = (Math.abs(budget - totalPrice)).toFixed(2);

    if (budget > totalPrice){
        console.log(`You have ${absMoney} leva left!`)
    } else {
        console.log(`Not enough money! You need ${absMoney} leva more!`)
    }
}

computerShopping(["900",
"2",
"1",
"3"])

computerShopping(["920.45",
"3",
"1",
"1"])