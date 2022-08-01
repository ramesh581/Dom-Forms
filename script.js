let data = new Object();

let firstName = document.getElementById('fname').value;
data.firstName = firstName;
let lastName = document.getElementById('lname').value;
data.lastName = lastName;
let address = document.getElementById('address').value;
data.address = address;
let state = document.getElementById('state').value;
data.state = state;
let country = document.getElementById('country').value;
data.country = country;
let pin = document.getElementById('pin').value;
data.pin = pin;

let gender = document.querySelector('input[name="Gender"]:checked').value;
data.gender = gender;

let foods = document.getElementsByName('food[]');
let food = [];
for(let i=0; i<foods.length; i++) {
    if(foods[i].checked){
        food.push(foods[i]);
    }
};
data.food = food;





let form = document.getElementById('form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let tableBody = document.querySelector('#table-body');
    let tableRow  = "" ;
    tableRow +=`
    <tr>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.address}</td>
    <td>${data.pin}</td>
    <td>${data.gender}</td>
    <td>${data.food.map((x)=>x.value)}</td>
    <td>${data.state}</td>
    <td>${data.country}</td>
    </tr>`;
    console.log(tableRow);
    tableBody.innerHTML = tableRow;
});

