module.exports = {
  score(dice) {
    const triplesScore = {
      1: 1000,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
    };
    const singleScore = { 1: 100, 5: 50 };
    const tally = {};
    let score = 0;
    dice.forEach(roll => {
      if (!tally[roll]) tally[roll] = 0;
      tally[roll]++;
    });

    Object.keys(tally).forEach(key => {
      if (tally[key] >= 3) {
        score += triplesScore[key];
      }
      score += (singleScore[key] || 0) * (tally[key] % 3);
    });
    return score;
  },
};
