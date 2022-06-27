



var selectedRow = null;
var btn = document.querySelector(".button")
btn.addEventListener("click", employdata);


function employdata(){
  var ax = read_Input_Value();
  if (selectedRow == null){
    create_Tr_Td(ax);
    remove_input_value()
  }
  else{   
    updatefunc(ax); 
    remove_input_value(); 
    selectedRow = null;
  }

}

function read_Input_Value(){
  var redemp={} 
  redemp["ename"] = document.querySelector(".empname").value;
  redemp["elastName"] = document.querySelector(".emplname").value;
  redemp["email"] = document.querySelector(".empemail").value;
  redemp["city"] = document.querySelector(".empcity").value;
  redemp["state"] = document.querySelector(".empstate").value;
  redemp["type"] = document.querySelector(".empType").value;


  return redemp
}
function create_Tr_Td(x){
  var empTable = document.querySelector(".list");
  var emp_tr = empTable.insertRow(empTable.length);
  var emp_td1 = emp_tr.insertCell(0);
  var emp_td2 = emp_tr.insertCell(1);
  var emp_td3 = emp_tr.insertCell(2);
  var emp_td4 = emp_tr.insertCell(3);
  var emp_td5 = emp_tr.insertCell(4);
  var emp_td6 = emp_tr.insertCell(5);
  var emp_td7 = emp_tr.insertCell(6);
  var emp_td8 = emp_tr.insertCell(7);


  var totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length-1;
  //Note:- .rows.length = return no of row 

  emp_td2.innerHTML = x.ename;   
    emp_td3.innerHTML = x.elastName;
    emp_td4.innerHTML = x.email;
  emp_td5.innerHTML = x.city;
  emp_td6.innerHTML = x.state;
  emp_td7.innerHTML = x.type;


  emp_td8.innerHTML = '<a class="edt btn btn-warning p-1" onClick="onEdit(this)">Edit</a>  / <a class="dlt btn btn-danger p-1" onClick="onDelete(this)">Delete</a>';

}

function remove_input_value(){
  document.querySelector(".empname").value= " ";
  document.querySelector(".emplname").value= " ";
  document.querySelector(".empemail").value= " ";
  document.querySelector(".empcity").value= " ";  
  document.querySelector(".empstate").value= " ";  
  document.querySelector(".empType").value= " ";  



}

function onEdit(y){
  console.log(y);

  //var selecteventbtn = document.querySelector("a.edt");
    selectedRow = y.parentElement.parentElement;
    //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
    document.querySelector(".empname").value = selectedRow.cells[1].innerHTML;
    document.querySelector(".emplname").value = selectedRow.cells[2].innerHTML;
     document.querySelector(".empemail").value = selectedRow.cells[3].innerHTML;
    document.querySelector(".empcity").value = selectedRow.cells[4].innerHTML;
    document.querySelector(".empstate").value = selectedRow.cells[5].innerHTML;
    document.querySelector(".empType").value = selectedRow.cells[6].innerHTML;


}

function updatefunc(redemp){
  selectedRow.cells[1].innerHTML = redemp.ename;
  selectedRow.cells[2].innerHTML = redemp.elastName;
  selectedRow.cells[3].innerHTML = redemp.email;
  selectedRow.cells[4].innerHTML = redemp.city;
  selectedRow.cells[5].innerHTML = redemp.state;
  selectedRow.cells[6].innerHTML = redemp.type;

  
}


function onDelete() {
    if (confirm('Are you sure to delete this record ?')) {
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    }
}



// End Of add to table


let firstNameInp = document.getElementById('fname');
let lastNameInp = document.getElementById('lname');
let mailInp = document.getElementById('femail');
let cityInp = document.getElementById('fcity');
let stateInp = document.getElementById('fstate');
let typeInp = document.getElementById('ftype');
let addBtn = document.getElementById('addBtn');
let token = localStorage.token


var api = "http://127.0.0.1:8000/api/customers"

console.log(token)


    let custData = {
        "firstName": firstNameInp.value,
        "lastName": lastNameInp.value,
        "mail": mailInp.value,
        "city": cityInp.value,
        "state": stateInp.value,
        "type": typeInp.value,


    }
    
    async function sentUser(){
      
      let response = await fetch(api,token,{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(custData),
      })
      console.log(response)
    }
    
 
  
// myHttp = new XMLHttpRequest()
// var allUser = [];

// myHttp.open('GET',)

// myHttp.addEventListener('readystatechange',function(){
//   if(myHttp.readystate == 4 && myHttp.status == 200){

//     allUser = myHttp.parse() myHttp.response;
//     console.log(myHttp.response)
    
//   }
// })