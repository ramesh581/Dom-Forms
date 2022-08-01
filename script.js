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


console.log(data);








 function collectData() {
    let tableBody = document.querySelector('#table-body');
    let tableRow  = `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pin}</td>
    <td>${gender}</td>
    <td>${food[0],food[1]}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>`;
    tableBody.innerHTML = tableRow;
}

