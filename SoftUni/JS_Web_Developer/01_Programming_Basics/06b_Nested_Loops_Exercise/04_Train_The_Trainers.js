function trainTheTrainers(input) {
    let judges = Number(input[0]);
    let index = 1;
    let name = input[1];
    index++
    let sum = 0;
    let bigSum = 0;
    let counter = 0
    let bigCounter = 0

    while (name !== `Finish`) {
        let score = Number(input[index])
        sum += score;
        counter++;

        if (counter === judges) {
            bigSum += sum;
            bigCounter += counter;
            sum = sum / judges;
            console.log(`${name} - ${sum.toFixed(2)}.`);
            counter = 0;
            name = input[index + 1];
            sum=0;
            index+=1;
        }
        index++;
    }

    console.log(`Student's final assessment is ${(bigSum / bigCounter).toFixed(2)}.`);
}