class FootballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let addedNames = [];

    footballPlayers.forEach((playerInfo) => {
      let [name, age, playerValue] = playerInfo.split("/");
      age = Number(age);
      playerValue = Number(playerValue);

      let existingPlayer = this.invitedPlayers.find((p) => p.name === name);

      if (existingPlayer) {
        if (existingPlayer.playerValue < playerValue) {
          existingPlayer.playerValue = playerValue;
        }
      } else {
        this.invitedPlayers.push({ name, age, playerValue });
        addedNames.push(name);
      }
    });

    return `You successfully invite ${addedNames.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split("/");
    playerOffer = Number(playerOffer);

    let player = this.invitedPlayers.find((p) => p.name === name);

    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (playerOffer < player.playerValue) {
      let priceDifference = player.playerValue - playerOffer;
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
      );
    }

    player.playerValue = "Bought";

    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, ageLimit) {
    let player = this.invitedPlayers.find((p) => p.name === name);

    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (player.age >= ageLimit) {
      return `${name} is above age limit!`;
    }

    let ageDifference = ageLimit - player.age;
    if (ageDifference < 5) {
      return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
    }

    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
  }

  transferWindowResult() {
    let result = "Players list:";
    this.invitedPlayers
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((player) => {
        result += `\nPlayer ${player.name}-${player.playerValue}`;
      });
    return result;
  }
}
