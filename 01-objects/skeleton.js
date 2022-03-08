const employee = {
    name: "Snehal Pimple",
    birthdate: new Date(new Date()),
    address: {
      flat: 201,
      street: "Random Street",
      pincode: 401101,
    },
    hobbies: [
      { activity: "Reading" },
      { activity: "Singing" },
      { activity: "Troubling others by asking questions" },
    ],
};
const getLayout = (employee, item = {}) => {
    for(var i in employee){
        // console.log(i)
        // console.log("testtttttttttt",employee[i]);
        if (employee[`${i}`].constructor.name  === 'Object') {
          item[`${i}`] = {}
          getLayout(employee[`${i}`], item[`${i}`])
        } else if (employee[`${i}`].constructor.name  === 'Array') {        
          item[`${i}`] = employee[`${i}`].map((e) => {
            return getLayout(e)
          })
        } else {
          item[`${i}`] = employee[`${i}`].constructor.name
        }
      }
    return item
}
let item = {}
let layout = getLayout(employee, item)

console.log("Output", { input: employee, output: layout });