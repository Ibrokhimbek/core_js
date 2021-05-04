// var name = "Max";
// let name = "Max";
const name = "Max";
// var age = 29;
// let age = 29;
const age = 29;
// var hasHobbies = true;
// let hasHobbies = true;
const hasHobiies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUser(name, age, "playing fotball"));
