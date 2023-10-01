function worldSwimmingRecord(input) {
  let record = Number(input[0]);
  let distance = Number(input[1]);
  let time = Number(input[2]);

  waterResistance = Math.floor(distance / 15) * 12.5;
  newRecord = distance * time + waterResistance;

  absoluteTime = Math.abs(record - newRecord);

  if (newRecord < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${newRecord.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${absoluteTime.toFixed(2)} seconds slower.`
    );
  }
}
