let employees=[{id:101,name:"rahul",sal:45000},
{id:102,name:"sonia",sal:55000},
{id:103,name:"priya",sal:65000},
{id:104,name:"modi",sal:75000}]
function display_data() {
  let rows=""
    for(employee of employees){
        rows=rows+ `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.sal}</td>
        </tr>`
    }
}
   document.getElementById("abc").innerHTML ="rows"