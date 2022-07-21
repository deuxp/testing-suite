const alog = item => {
  let count = 0;
  return item => {
    count += 1;
    console.log(
      `\n-------------------<( ${count} )>-\n${JSON.stringify(item, null, 2)}`
    );
  };
};
const log = alog();

module.exports = { log };
