function lunchBreak(input){
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    lunchTime = breakDuration * 0.125;
    restTime = breakDuration * 0.25;
    usedTime = lunchTime + restTime;
    leftTime = breakDuration - usedTime;
    
    absTime = Math.abs(leftTime - episodeDuration);
    absTime = Math.ceil(absTime)

    if (leftTime >= episodeDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${absTime} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${absTime} more minutes.`)
    }
}
