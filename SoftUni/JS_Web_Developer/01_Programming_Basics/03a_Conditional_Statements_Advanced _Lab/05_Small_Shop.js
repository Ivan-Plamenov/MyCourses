function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let amount = Number(input[2]);

  switch (product) {
    case "coffee":
      if (city == "Sofia") {
        price = 0.5;
        break;
      } else if (city == "Plovdiv") {
        price = 0.4;
        break;
      } else if (city == "Varna") {
        price = 0.45;
        break;
      }

    case "water":
      if (city == "Sofia") {
        price = 0.8;
        break;
      } else if (city == "Plovdiv") {
        price = 0.7;
        break;
      } else if (city == "Varna") {
        price = 0.7;
        break;
      }

    case "beer":
      if (city == "Sofia") {
        price = 1.2;
        break;
      } else if (city == "Plovdiv") {
        price = 1.15;
        break;
      } else if (city == "Varna") {
        price = 1.1;
        break;
      }

    case "sweets":
      if (city == "Sofia") {
        price = 1.45;
        break;
      } else if (city == "Plovdiv") {
        price = 1.3;
        break;
      } else if (city == "Varna") {
        price = 1.35;
        break;
      }

    case "peanuts":
      if (city == "Sofia") {
        price = 1.6;
        break;
      } else if (city == "Plovdiv") {
        price = 1.5;
        break;
      } else if (city == "Varna") {
        price = 1.55;
        break;
      }
  }
  finalPrice = price * amount;
  console.log(finalPrice);
}
