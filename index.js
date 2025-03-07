// Write your solution in this file!
const employee = {
  employeename: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
const newObj = {...obj};
newObj[key] = value;
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key){
  const newObj = {...employee};
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key];
return employee;
}