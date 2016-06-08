var contacts = [];
var btn = document.querySelector("button");

btn.addEventListener('click', post);

function post(event) {
    event.preventDefault();
    var nameVal = document.getElementById("name").value;
    var phoneVal = document.getElementById("phone").value;
    var emailVal = document.getElementById("email").value;
    var contact = {
        name: nameVal,
        phone: phoneVal,
        email: emailVal
    };
    var tableBody = document.querySelector("tbody");

    tableBody.innerHTML = null;
    contacts.push(contact);

    for (var i = 0; i < contacts.length; i++) {
        tableBody.innerHTML += "<tr><td>" + contacts[i].name
        + "</td><td>" + contacts[i].phone
        + "</td><td>" + contacts[i].email
        + "</td></tr>";
    }
    document.querySelector("form").reset();
}
