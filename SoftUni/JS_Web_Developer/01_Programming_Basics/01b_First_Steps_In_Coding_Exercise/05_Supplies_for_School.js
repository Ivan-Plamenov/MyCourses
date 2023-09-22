function schoolSupplies(input){
    let pocketsPencils = Number(input[0]);
    let pocketsMakers = Number(input[1]);
    let litersDeteregent = Number(input[2]);
    let procentsDiscount = Number(input[3]) * 0.01;

    pencilsPrice = pocketsPencils * 5.8;;
    markersPrice = pocketsMakers * 7.2;;
    deteregentPrice = litersDeteregent * 1.2;;
    totalPrice = pencilsPrice + markersPrice + deteregentPrice;;
    totalDiscount = totalPrice * procentsDiscount;;
    finalPrice = totalPrice - totalDiscount;;

    console.log(finalPrice)
}
