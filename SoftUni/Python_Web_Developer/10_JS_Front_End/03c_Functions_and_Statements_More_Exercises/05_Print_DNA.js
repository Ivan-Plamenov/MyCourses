function printDNAHelix(length) {
  const sequence = "ATCGTTAGGG";
  let sequenceIndex = 0;

  for (let i = 0; i < length; i++) {
    const currentRow = i % 4;

    if (currentRow === 0) {
      console.log(
        `**${sequence[sequenceIndex++]}${sequence[sequenceIndex++]}**`
      );
    } else if (currentRow === 1 || currentRow === 3) {
      console.log(
        `*${sequence[sequenceIndex++]}--${sequence[sequenceIndex++]}*`
      );
    } else {
      console.log(
        `${sequence[sequenceIndex++]}----${sequence[sequenceIndex++]}`
      );
    }

    if (sequenceIndex === sequence.length) {
      sequenceIndex = 0;
    }
  }
}
