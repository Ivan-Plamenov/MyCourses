function workingHours(input){
    let hour = Number(input[0]);
    let day  =  input[1];

    if (hour <= 18 && hour >= 10 && day != "Sunday"){
        console.log(`open`)
    } else {
        console.log(`closed`)
    }
 }