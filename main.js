var emplyeeName =document.getElementById("employeeName") ; 
var emplyeeAge = document.getElementById("employeeAge") ; 
var emplyeeDep = document.getElementById("department") ;  
var emplyeeSalary = document.getElementById("salary") ; 
var currentIndex = 0 ; 
var inputs = document.getElementsByClassName("inputs");
var deleteBtn = document.getElementById("deleteBtn");
var employees = [] ; 
var btn = document.getElementById("click") ; 
var date = document.getElementById("data");


if (localStorage.getItem("EmployeesList") == null ){
    var employees = [] ; 
}else {
   employees = JSON.parse(localStorage.getItem("EmployeesList"));
   displayData() ; 
}
btn.onclick= function(){
    if(btn.innerText == "Add"){
        createEmployee() ; 
    }
    else{
        updateEmployee();
    }
    displayData() ; 
    clear();
}

function createEmployee() { 
    var employee ={
        employeeName:emplyeeName.value, 
        age:emplyeeAge.value , 
        dept:emplyeeDep.value, 
        salary:emplyeeSalary.value 
    }
    
    employees.push(employee);
    localStorage.setItem("EmployeesList", JSON.stringify(employees));

}
function displayData(){
    var result = "" ; 
    for (i = 0 ; i < employees.length ; i++){
        result += `
        <tr>
            <td>${i}</td>
            <td>${employees[i].employeeName}</td>
            <td>${employees[i].age}</td>
            <td>${employees[i].dept}</td>
            <td>${employees[i].salary}</td>
            <td><button class= "update" onclick=getData(${i})>Update</button></td>
            <td><button class="delete" onclick="deleteEmplyee(${i})">Delete</button></td>
        </tr>
        `;
    }

    data.innerHTML = result ; 
}
function clear() { 
    for (i= 0 ; i <inputs.length ; i++ ){
        inputs[i].value= "" ; 
    }
}
function deleteEmplyee(index ){
    employees.splice(index,1);
    localStorage.setItem("EmployeesList", JSON.stringify(employees));
    displayData() ; 
}
deleteBtn.onclick = function(){
    localStorage.removeItem("EmployeesList");
    employees = [] ; 
    date.innerHTML = "" ; 
}

function search(name){
    var result = "" ; 
    for (i = 0 ; i < employees.length ; i++){
        if (employees[i].employeeName.toLowerCase().includes(name.toLowerCase())){
        result += `
        <tr>
            <td>${i}</td>
            <td>${employees[i].employeeName}</td>
            <td>${employees[i].age}</td>
            <td>${employees[i].dept}</td>
            <td>${employees[i].salary}</td>
            <td><button class= "update">Update</button></td>
            <td><button class="delete" onclick="deleteEmplyee(${i})">Delete</button></td>
        </tr>
        `;
    }
}

    data.innerHTML = result ;  
}

function getData(index){

    var employee = employees[index];
    emplyeeName.value=employee.employeeName
    emplyeeAge.value = employee.age;
    emplyeeDep.value=employee.dept;
    emplyeeSalary.value=employee.salary;
    currentIndex = index ; 
    btn.innerHTML="update" ; 
}

function updateEmployee(){
    var employee = {
        employeeName:employeeName.value  ,
        age:emplyeeAge.value, 
        dept:emplyeeDep.value,
        salary:emplyeeSalary.value
    };

    employees[currentIndex].employeeName = employee.employeeName ; 
    employees[currentIndex].age = employee.age ; 
    employees[currentIndex].dept = employee.dept; 
    employees[currentIndex].salary = employee.salary; 
    localStorage.setItem("EmployeesList", JSON.stringify(employees));
    btn.innerHTML = "Add" ; 
}
