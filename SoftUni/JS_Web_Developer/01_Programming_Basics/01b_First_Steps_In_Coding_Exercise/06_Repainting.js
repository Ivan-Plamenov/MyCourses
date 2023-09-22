function Repainting(input){
    let plasticAmount = Number(input[0]);
    let paintAmount = Number(input[1]);
    let paintthinerAmount = Number(input[2]);
    let hoursAmount = Number(input[3]);

    plasticCosts = plasticAmount * 1.5;;
    paintCosts = paintAmount * 14.5;;
    paintthinerCosts = paintthinerAmount * 5;;
    extraCosts = 0.1 * paintAmount * 14.5 + 2 * 1.5 + 0.4;;
    totalcostsMaterials = plasticCosts + paintCosts + 
    paintthinerCosts + extraCosts;;
    hoursCosts = hoursAmount * totalcostsMaterials * 0.3;;
    finalCosts = totalcostsMaterials + hoursCosts;;

    console.log(finalCosts)
}
