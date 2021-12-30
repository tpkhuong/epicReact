export const dataObj = {
  name: "Deadpool",
  count: 0,
  userInput: null,
  sayHi(userName) {
    console.log(this.name); //Deadpool
    this.name = userName;
    console.log(userName); //what we pass into sayHi
    console.log(this.name); //what we pass into sayHi
  },
  addToCount(addUserInput) {
    this.count++;
    this.userInput = addUserInput;
    console.log(this.count);
    console.log(this.userInput);
  },
};
