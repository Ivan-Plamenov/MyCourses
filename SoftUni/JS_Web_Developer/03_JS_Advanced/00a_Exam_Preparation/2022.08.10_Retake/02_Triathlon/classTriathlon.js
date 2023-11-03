class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    if (this.participants[participantName]) {
      return `${participantName} has already been added to the list`;
    }
    this.participants[participantName] = participantGender;
    return `A new participant has been added - ${participantName}`;
  }

  completeness(participantName, condition) {
    if (!this.participants[participantName]) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }
    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    }

    const completedCount = Math.floor(condition / 30);
    if (completedCount < 3) {
      return `${participantName} could only complete ${completedCount} of the disciplines`;
    }

    this.listOfFinalists.push({
      participantName,
      participantGender: this.participants[participantName],
    });
    delete this.participants[participantName];
    return `Congratulations, ${participantName} finished the whole competition`;
  }

  rewarding(participantName) {
    const finalist = this.listOfFinalists.find(
      (p) => p.participantName === participantName
    );
    if (!finalist) {
      return `${participantName} is not in the current finalists list`;
    }
    return `${participantName} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return "There are no finalists in this competition";
    }

    const filteredFinalists = this.listOfFinalists.filter(
      (p) => criteria === "all" || p.participantGender === criteria
    );

    if (filteredFinalists.length === 0) {
      return `There are no ${criteria}'s that finished the competition`;
    }

    if (criteria !== "all") {
      return `${filteredFinalists[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    }

    const names = filteredFinalists.map((p) => p.participantName).sort();
    return (
      `List of all ${this.competitionName} finalists:\n` + names.join("\n")
    );
  }
}
