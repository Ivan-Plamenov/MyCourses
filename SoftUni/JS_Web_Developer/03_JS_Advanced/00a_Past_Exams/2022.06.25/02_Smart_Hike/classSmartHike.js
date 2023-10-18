class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak]) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    const resourcesNeeded = time * 10;
    if (resourcesNeeded > this.resources) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= resourcesNeeded;
    this.listOfHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    const filteredHikes = this.listOfHikes.filter(
      (h) => criteria === "all" || h.difficultyLevel === criteria
    );
    if (filteredHikes.length === 0) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }

    if (criteria !== "all") {
      const bestHike = filteredHikes.sort((a, b) => a.time - b.time)[0];
      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }

    const hikesReport = filteredHikes.map(
      (h) => `${this.username} hiked ${h.peak} for ${h.time} hours`
    );
    return "All hiking records:\n" + hikesReport.join("\n");
  }
}
