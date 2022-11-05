const emp = ["Gray", "Worm", "Security", 1]

 const [firstName, familyName, title, payPerHour] = emp

 //console.log(firstName)
// console.log(first)

//const ["Gray": firstName] = emp

// const asgardianBrothers = [
//     {
//       firstName: "Thor",
//       familyName: "Odinsson"
//     },
//     {
//       firstName: "Loki",
//       familyName: "Laufeysson-Odinsson"
//     }
//   ]



  function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return [ title, payPerHour]
        //return employee
  }
console.log(createEmployeeRecord(emp))


// class Employees{
//    createEmployeeRecord(firstName, lastName, title, pay) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.title = title;
//     this.pay = pay

    
//     }
// }

// const [firstName, lastName, title, pay] = createEmployeeRecord()


// function createEmployeeRecord() {
//     return [firstName, familyName, title, payPerHour]
// }

function createTimeInEvent() {

}

function createTimeOutEvent() {

}