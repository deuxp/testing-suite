function validISBN10(isbn) {
  // input:string
  let isbnArray = isbn
    .split("")
    .map((num, i) => {
      let index = i + 1;
      if (num === "X") index = 10;
      return Number(index) + Number(num);
    })
    .reduce((k, v) => k + v);
  return isbnArray % 11 === 0;
}
