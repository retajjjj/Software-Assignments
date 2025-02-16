function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        idCell.id=item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)
        deleteButton.addEventListener("click", function(){ deleteEmployee(item.id)});

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
var submit_button=document.getElementById("submit");
submit_button.addEventListener("click", createEmployee);

// TODO
// add event listener to delete button
//var delete_button=document.querySelector('.btn btn-danger btn-sm')
//delete_button.addEventListener("click", deleteEmployee);


// TODO
function createEmployee (){
  // get data from input field
  let name = document.getElementById('name').value;
  let id = document.getElementById('id').value
  const newEmployee={
    "id":id,
    "name":name
  };
  // send data to BE
  fetch('http://localhost:3000/api/v1/employee' , 
    { method: 'POST' , 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    }
  )
  // call fetchEmployees
  fetchEmployees()
}

// TODO
function deleteEmployee(id){
  // get id
  // send id to BE
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  })
  .then(response => {
    if (response.ok) {
      console.log(`Employee with id ${id} deleted successfully.`);
      fetchEmployees()
    } else {
      console.error('Failed to delete employee');
    }
  })
  .catch(error => console.error('Error:', error));
  // call fetchEmployees
  fetchEmployees()
}

fetchEmployees()
