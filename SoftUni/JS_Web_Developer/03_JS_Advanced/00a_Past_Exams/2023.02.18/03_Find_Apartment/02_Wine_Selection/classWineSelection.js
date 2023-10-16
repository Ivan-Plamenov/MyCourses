class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw new Error("Not enough space in the cellar.");
    }

    const wine = {
      wineName,
      wineType,
      price,
      paid: false,
    };

    this.wines.push(wine);
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const wine = this.wines.find((w) => w.wineName === wineName);

    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }

    if (wine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }

    wine.paid = true;
    this.bill += price;

    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    const index = this.wines.findIndex((w) => w.wineName === wineName);

    if (index === -1) {
      throw new Error("The wine, you're looking for, is not found.");
    }

    if (!this.wines[index].paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    this.wines.splice(index, 1);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    let winesToDisplay;
    if (wineType) {
      winesToDisplay = this.wines.filter((w) => w.wineType === wineType);
      if (winesToDisplay.length === 0) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
    } else {
      winesToDisplay = [...this.wines];
    }

    const formattedBill =
      this.bill % 1 === 0 ? Math.floor(this.bill) : this.bill.toFixed(2);

    winesToDisplay.sort((a, b) => a.wineName.localeCompare(b.wineName));
    const winesInfo = winesToDisplay
      .map(
        (wine) =>
          `${wine.wineName} > ${wine.wineType} - ${
            wine.paid ? "Has Paid" : "Not Paid"
          }.`
      )
      .join("\n");

    if (wineType) {
      return winesInfo;
    }

    return `You have space for ${
      this.space - this.wines.length
    } bottles more.\nYou paid ${formattedBill}$ for the wine.\n${winesInfo}`;
  }
}
