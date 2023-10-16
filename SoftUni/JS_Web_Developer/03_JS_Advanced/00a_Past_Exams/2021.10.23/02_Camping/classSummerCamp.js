class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = {
      child: 150,
      student: 300,
      collegian: 500,
    };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    if (
      this.listOfParticipants.find((participant) => participant.name === name)
    ) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });

    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const index = this.listOfParticipants.findIndex(
      (participant) => participant.name === name
    );
    if (index === -1) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants.splice(index, 1);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1Name, participant2Name) {
    const participant1 = this.listOfParticipants.find(
      (participant) => participant.name === participant1Name
    );
    const participant2 =
      participant2Name &&
      this.listOfParticipants.find(
        (participant) => participant.name === participant2Name
      );

    if (!participant1 || (participant2Name && !participant2)) {
      throw new Error(`Invalid entered name/s.`);
    }

    if (typeOfGame === "WaterBalloonFights") {
      if (participant1.condition !== participant2.condition) {
        throw new Error("Choose players with equal condition.");
      }

      if (participant1.power > participant2.power) {
        participant1.wins++;
        return `The ${participant1.name} is winner in the game ${typeOfGame}.`;
      } else if (participant2.power > participant1.power) {
        participant2.wins++;
        return `The ${participant2.name} is winner in the game ${typeOfGame}.`;
      } else {
        return "There is no winner.";
      }
    } else if (typeOfGame === "Battleship") {
      participant1.power += 20;
      return `The ${participant1.name} successfully completed the game ${typeOfGame}.`;
    }
  }

  toString() {
    let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach((participant) => {
        output += `\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`;
      });
    return output;
  }
}
