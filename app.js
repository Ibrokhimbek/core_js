const name = "Max";
let age = 29;
const hasHobiies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
};

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(3));
console.log(addRandom());

console.log(summarizeUser(name, age, "playing fotball"));
