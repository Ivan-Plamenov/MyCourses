function fishTank(input){
    let lenghtCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let takenRoom = Number(input[3]) * 0.01;

    totalVolume = (lenghtCm * widthCm * heightCm) / 1000;;
    freeVolume = totalVolume - totalVolume * takenRoom;;

    console.log(freeVolume)
}

fishTank(["85","75","47","17"])
fishTank(["105","77","89","18.5"])
