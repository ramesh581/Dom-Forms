let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;
let address = document.getElementById('address').value;
let state = document.getElementById('state').value;
let country = document.getElementById('country').value;
let pin = document.getElementById('pin').value;

let gender = document.querySelector('input[name="Gender"]:checked').value;

let foods = document.getElementsByName('food[]');

let food = [];
for(let i=0; i<foods.length; i++) {
    if(foods[i].checked){
        food.push(foods[i]);
    }
};

console.log(firstName,lastName,address,state,country,pin,gender,food);








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

