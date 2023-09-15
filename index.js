// Write your solution in this file!
const employee={
    name:'Sam',
    streetAddress:'11 Ruiru'
};
function updateEmployeeWithKeyAndValue(employee, streetAddress , value) {
    const UnharmedEmployee = { ...employee };
    UnharmedEmployee[streetAddress]="11 Broadway";
        return UnharmedEmployee;
  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway';
    return employee;
  }
function deleteFromEmployeeByKey(employee, name) {
    const DeletedEmployee = { ...employee };
    delete DeletedEmployee[name];
    return DeletedEmployee;
  }
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
  }