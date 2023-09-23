function smallShop(input){
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    switch (product){
        case "coffee":
            if (city == "Sofia"){
                price = 0.50;
                break;
            } else if (city == "Plovdiv"){
                price = 0.40;
                break;
            } else if (city == "Varna"){
                price = 0.45;
                break;
            }

            case "water":
                if (city == "Sofia"){
                    price =  0.80;
                    break;
                } else if (city == "Plovdiv"){
                    price =  0.70;
                    break;
                } else if (city == "Varna"){
                    price =  0.70;
                    break;
                }

            case "beer":
                if (city == "Sofia"){
                    price =  1.20;
                    break;
                } else if (city == "Plovdiv"){
                    price =  1.15;
                    break;
                } else if (city == "Varna"){
                    price =  1.10;
                    break;
                }

            case "sweets":
                if (city == "Sofia"){
                    price = 1.45;
                    break;
                } else if (city == "Plovdiv"){
                    price =  1.30;
                    break;
                } else if (city == "Varna"){
                    price =  1.35;
                    break;
                }

            case "peanuts":
                if (city == "Sofia"){
                    price =  1.60;
                    break;
                } else if (city == "Plovdiv"){
                    price =  1.50;
                    break;
                } else if (city == "Varna"){
                    price = 1.55;
                    break;
                }     
    }
    finalPrice = price * amount
    console.log(finalPrice)
}
