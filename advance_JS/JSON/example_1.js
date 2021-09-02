//employee json object
var employee = {
  "firstname" : "Ram", "salary":2000, "designation" : "web developer"
} 
console.log("Laxman Salary is " +employee.salary);

//employees JSON Array

var employees = [
  {"firstname" : "Manish", "lastname":"Mali", "salary":25000, "designation":"Manager"},
  {"firstname" : "Ramesh", "lastname":"Kale", "salary":15000, "designation":"Operator"},
  {"firstname" : "Omkar", "lastname":"Rao", "salary":50000, "designation":"HR"},
  {"firstname" : "Anand", "lastname":"Kumar", "salary":100000, "designation":"Developer"}
]

employees.forEach(function(employee){
  console.log(employee.firstname+ " " +employee.lastname+ " is Employee Full Name");
  console.log(employee.firstname+ " is a " +employee.designation+ " and " +employee.salary+ " is Employee Salary");
})