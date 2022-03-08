class Employee {
  constructor(name, company) {
    this.name = name;
    this.company = company;
    this.address = {
      street: "some street",
      pin: "401011",
    };
  }
  // class method
  printName() {
    // console.log("Welcome", this.name);
    return `I like $(this.name)`;
  }
}

const emp1 = new Employee("Snehal", "Contentstack");
const emp2 = new Employee("Sayali", "Contentstack");
const test = {
  city: "Virar ",
  name: "Random Name",
};

const emp3 = { 
  ...emp1,
  address:
  {
    ...emp1.address
  }, 
  // __proto__: Employee.prototype
}; // spread operation-- creates copy of emp1
// emp1 ===emp3 // false
// const emp3 = Employee(emp1)
// emp1.addreess = emp2.address // false(expected) --> true (observed)

