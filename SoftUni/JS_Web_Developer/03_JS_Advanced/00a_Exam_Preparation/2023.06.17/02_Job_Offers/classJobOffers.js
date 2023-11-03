class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  jobApplication(candidates) {
    let addedNames = [];

    candidates.forEach((candidate) => {
      let [name, education, yearsExperience] = candidate.split("-");
      education = education.trim();
      yearsExperience = parseInt(yearsExperience.trim());

      let existingCandidate = this.jobCandidates.find((c) => c.name === name);

      if (existingCandidate) {
        if (existingCandidate.yearsExperience < yearsExperience) {
          existingCandidate.yearsExperience = yearsExperience;
        }
      } else {
        this.jobCandidates.push({ name, education, yearsExperience });
        addedNames.push(name);
      }
    });

    return `You successfully added candidates: ${addedNames.join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split("-");
    minimalExperience = parseInt(minimalExperience.trim());

    let candidate = this.jobCandidates.find((c) => c.name === name);

    if (!candidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (candidate.yearsExperience < minimalExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }

    candidate.yearsExperience = "hired";
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    let candidate = this.jobCandidates.find((c) => c.name === name);

    if (!candidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    let salary;
    if (candidate.education === "Bachelor") {
      salary = "$50,000";
    } else if (candidate.education === "Master") {
      salary = "$60,000";
    } else {
      salary = "$40,000";
    }

    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error("Candidate Database is empty!");
    }

    let candidatesList = this.jobCandidates
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c) => `${c.name}-${c.yearsExperience}`)
      .join("\n");

    return `Candidates list:\n${candidatesList}`;
  }
}
