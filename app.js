const person = {
  name: "Ibrokhim",
  age: 20,
  greet: () => {
    console.log("Hi I'm " + person.name);
  },
  greet() {
      console.log("Hi I'm " + person.name)
  }
};

person.greet();
