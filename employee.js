// var employeeDiv=document.querySelector('div.EmployeeDetails');
// const employeeDetails=[{name:'ankush', age:22, salary:25000, designation:'developer'}, {name:'sidharth', age:25, salary:50000,designation:'QA'},{name:'ankur', age:'28', salary:75000,designation:'Manager'}]
// var headings=["Name","Age","Salary","Designation"];
// var employeeTable=document.createElement('table');
// employeeTable.setAttribute('id', 'empTable');

// /*Employee Head*/
// var employeeeTableHead=document.createElement('thead');
// var employeeTableRow=document.createElement('tr');
   
// headings.forEach(element => {
//     var tableHeader=document.createElement('th')
//     tableHeader.innerText= element;
//     employeeTableRow.append(tableHeader);
    
// });

// employeeeTableHead.append(employeeTableRow);
// employeeTable.append(employeeeTableHead);
// console.log
// employeeDiv.append(employeeTable);
// /*Employee Body*/
// var employeeTableBody=document.createElement('tbody');
// employeeDetails.forEach((element, i) => {
//     var tableBodyRow=document.createElement('tr');
//     Object.values(element).forEach(item => {
//     var tableBodyData=document.createElement('td');
//     tableBodyData.innerText=item;
//     tableBodyRow.append(tableBodyData);
// });
// employeeTableBody.append(tableBodyRow);
    
// });
// employeeTable.append(employeeTableBody);
/*Form*/
//var removeEmp=document.getElementById('removeEmp')

const employeeDetails=[{name:'ankush', age:22, salary:25000, designation:'developer'}, 
{name:'sidharth', age:25, salary:50000,designation:'QA'},
{name:'ankur', age:'28', salary:75000,designation:'Manager'}]
var formTable=document.getElementById('form');
function form(){
    var nameEmp=document.getElementById('name').value || 'dummy';
    var ageEmp=document.getElementById('age').value || 30;
    var salaryEmp=document.getElementById('salary').value || 4555;
    var designationEmp=document.getElementById('dgt').value || 'developer';
    console.log(nameEmp);
    console.log(ageEmp);
    console.log(salaryEmp);
    console.log(designationEmp);
    const formObj= {name:nameEmp,age:ageEmp,salary:salaryEmp,designation:designationEmp};
    tableCreator(formObj);
} 
/*var submitButton=document.getElementById('button');
var submitButton=addEventListener('click',form);*/
/*Table Data*/
function tableCreator( rowObject){
var employeeDiv=document.querySelector('div.EmployeeDetails');

rowObject && employeeDetails.push(rowObject);
//console.log(employeeDetails);
var headings=["Name","Age","Salary","Designation","Action"];
var employeeTable=document.createElement('table');
employeeTable.className='empTable';

/*Employee Head*/
var employeeeTableHead=document.createElement('thead');
employeeeTableHead.className='empTableHead';
var employeeTableRow=document.createElement('tr');
employeeTableRow.className= 'empTableRow';
   
headings.forEach(element => {
    var tableHeader=document.createElement('th')
    tableHeader.className= 'tableHeader';
    tableHeader.innerText= element;
    employeeTableRow.append(tableHeader);
    
});

employeeeTableHead.append(employeeTableRow);
employeeTable.append(employeeeTableHead);
employeeDiv.append(employeeTable);
/*Employee Body*/
var employeeTableBody=document.createElement('tbody');
//employeeTableBody.setAttribute();
employeeDetails.forEach((element, i) => {
    var tableBodyRow=document.createElement('tr');
    tableBodyRow.setAttribute('id', 'empTableBodyRow');
    var removeButton=document.createElement("BUTTON");
    removeButton.innerText='Remove';
    removeButton.addEventListener('click',() => removeItem(i));
    Object.values(element).forEach(item => {
    var tableBodyData=document.createElement('td');
    tableBodyData.setAttribute('id', 'empTableBodyData');
    tableBodyData.innerText=item;
    
    tableBodyRow.append(tableBodyData);
});
tableBodyRow.append(removeButton);
employeeTableBody.append(tableBodyRow);
    
});
employeeTable.append(employeeTableBody);
employeeTable.setAttribute("border","2");
}
var submitButton=document.getElementById('btn');
submitButton.addEventListener('click',form);
/*remove Item*/

 const removeItem=function (i){
    // var removeRow=document.getElementById('empTableBodyRow');
     console.log('Index',i);
     employeeDetails[i]='';
     tableCreator();

}
