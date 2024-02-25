function useMe() {
  let get;
  return second => {
    if (second === undefined) return get;
    get = second;
    return get;
  };
}

// const [tag, setTag] = useMe("gary");
// const res = useState("second");
// const res2 = useState("hi");
// console.log(res2); // >>> 6
const setState = useMe();
let label = setState("gregory");
console.log(label); // >>> "gregory"
label = setState("bob");
console.log(label); // >>> "bob"
