function basketballEquipment(input){
    let yearlyFeed = Number(input[0]);

    basketballShoes = yearlyFeed * 0.6;;
    basketballKit = basketballShoes * 0.8;;
    basketballBall = basketballKit * 0.25;;
    basketballMisc = basketballBall * 0.2;;
    totalCosts = basketballShoes + basketballKit + 
    basketballBall + basketballMisc + yearlyFeed;;

    console.log(totalCosts)
}
