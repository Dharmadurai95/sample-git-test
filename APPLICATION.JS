var employees = [
    {id:1, name: "dharma", phone: 9894982704, ld: "DME" },
    {id:2, name: "sathis", phone: 987654310, ld: "mca" },
    {id:3, name: "raj", phone: 56565656565, ld: "mbas"}
 
]

function generateView(employees) {
    var viewString = `<table class="table">
    <thead>
      <tr>
        <th>NAME</th>
        <th>QUALIFICATION</th>
        <th>PHONE NUMBER</th>
        <th>EDIT&DELETE</th>
      </tr>
    </thead>
    <tbody>`;
    employees.forEach((value, index, arr) => {
    viewString += `<tr>
        <td>${value.name}</td>
        <td>${value.phone}</td>
        <td>${value.ld}</td>
        <td><button type="button"onclick="edit()" id="ed"class="btn btn-primary">Edit</button>
        <button type="button" onclick="delete()" id="del" class="btn btn-danger" >Delete</button></td>
    </tr>`
    })
    viewString += `</tbody></table>`;
    document.getElementById("applicationViewver").innerHTML = viewString;
}
generateView(employees);
console.log(employees);

function newEmployee() {
    var name = document.getElementById("name");
    var phoneNumber = document.getElementById("phoneNumber");
    var latestDeg = document.getElementById("qualification");

    var newEmployee = {id:employees.length++,name: name.value, phone: phoneNumber.value, ld:latestDeg.value }

    //add the latest employee to employees array
    employees.push(newEmployee);
    //clear the input once employee upated 
    name.value = phoneNumber.value = latestDeg.value = "";
    //render the viewEmployeer table
    generateView(employees);
}

 function edit(){
  var e=document.getElementById("ed");
  
 }
function delete_em(){
var d=document.getElementById("delete");

windows.alert(d);
}
generateView(employees);
