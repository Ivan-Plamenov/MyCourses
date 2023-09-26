function addRemove(arr = []) {
    let initial = 0;
    let numbers = [];
    arr.forEach((command) => {
        initial++;
        command === "add" ? numbers.push(initial) : numbers.pop();
    });
    numbers.length > 0 ? console.log(numbers.join("\n")) : console.log("Empty");
}