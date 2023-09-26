function constructionCrew({ weight, experience, levelOfHydrated, dizziness }) {
    const reqWater = 0.1 * weight * experience;
    let modified = {};
    if (dizziness) {
        levelOfHydrated += reqWater;
        dizziness = false;
    }

    modified.weight = weight;
    modified.experience = experience;
    modified.levelOfHydrated = levelOfHydrated;
    modified.dizziness = dizziness;

    return modified;
}