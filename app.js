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

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby)
// }
console.log(hobbies.map((hobby) => `Hobby: ${hobby}`));
console.log(hobbies);
