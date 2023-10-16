class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    const model = articleModel.toLowerCase();

    if (!this.possibleArticles.hasOwnProperty(model)) {
      throw new Error("This article model is not included in this gallery!");
    }

    const articleIndex = this.listOfArticles.findIndex(
      (a) => a.articleModel === model && a.articleName === articleName
    );

    if (articleIndex !== -1) {
      this.listOfArticles[articleIndex].quantity += quantity;
    } else {
      this.listOfArticles.push({ articleModel: model, articleName, quantity });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    if (this.guests.some((g) => g.guestName === guestName)) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points;
    switch (personality) {
      case "Vip":
        points = 500;
        break;
      case "Middle":
        points = 250;
        break;
      default:
        points = 50;
        break;
    }

    this.guests.push({ guestName, points, purchaseArticle: 0 });

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    const model = articleModel.toLowerCase();

    const article = this.listOfArticles.find(
      (a) => a.articleModel === model && a.articleName === articleName
    );
    if (!article) {
      throw new Error("This article is not found.");
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    const guest = this.guests.find((g) => g.guestName === guestName);
    if (!guest) {
      return "This guest is not invited.";
    }

    if (guest.points < this.possibleArticles[model]) {
      return "You need to more points to purchase the article.";
    }

    guest.points -= this.possibleArticles[model];
    article.quantity -= 1;
    guest.purchaseArticle += 1;

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[model]} points.`;
  }

  showGalleryInfo(criteria) {
    if (criteria === "article") {
      return [
        "Articles information:",
        ...this.listOfArticles.map(
          (a) => `${a.articleModel} - ${a.articleName} - ${a.quantity}`
        ),
      ].join("\n");
    } else if (criteria === "guest") {
      return [
        "Guests information:",
        ...this.guests.map((g) => `${g.guestName} - ${g.purchaseArticle}`),
      ].join("\n");
    }
  }
}
