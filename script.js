let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let address = document.getElementById('address');
let state = document.getElementById('state');
let country = document.getElementById('country');
let pin = document.getElementById('pin');
let gender = document.querySelector('gender');
let food = document.getElementsByName('food');

let submit = document.getElementById('submit');

let tableBody = document.querySelector('#table-body');



submit.addEventListener('click', () => {
    let tableRow = "";
    tableRow += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${address}</td>
    <td>${pin}</td>
    <td>${gender}</td>
    <td>${food[0]}</td>
    <td>${state}</td>
    <td>${country}</td>
    </tr>`;
    tableBody.appendChild(tableRow);
    console.log(firstName,lastName,address,state,country,pin,gender,food);

  
});

console.log(firstName,lastName,address,state,country,pin,gender,food);