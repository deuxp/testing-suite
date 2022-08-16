/*
Purpose:  multi pointers; checks for duplicates in the args
inputs:any     -> looks for strict equality of the arguments passed
output:boolean -> result of comparison
*/

const areThereDuplicates = (...props) => {
  if (props.length <= 1) return false;

  const checked = {};
  props.forEach(arg => {
    checked[arg] = ++checked[arg] || 1;
  });

  if (props.length !== Object.keys(checked).length) return true;
  return false;
};

module.exports = { areThereDuplicates };
