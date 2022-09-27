// run in the debugger to see a
// simple example of how a call stack pushes and pops
// once a resolution is reached for each function in the stack

function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  // returns random index
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!!!");
}

wakeUp();
