const validISBN10 = isbn => {
  if (isbn.length !== 10) return false;
  return (
    [...isbn] // replaces split strings
      .map((num, i) => {
        if (num === "X" && i > 8) num = 10;
        return ++i * Number(num); // ++i evaluates to i incremented by 1
      })
      .reduce((k, v) => k + v) %
      11 ===
    0
  );
};

module.exports = { validISBN10 };
