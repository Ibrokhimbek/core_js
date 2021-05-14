const person = {
  name: "Ibrokhim",
  age: 20,
  //   greet: () => {
  //     console.log("Hi I'm " + person.name);
  //   },
  greet() {
    console.log("Hi I'm " + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby)
// }
// console.log(hobbies.map((hobby) => `Hobby: ${hobby}`));
// console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

//Rest operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
