class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
        }
    }
}

const users = [];

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

   
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = parseInt(document.getElementById("age").value);
    const location = document.getElementById("location").value;

   
    const user = new User(firstName, lastName, age, location);
    users.push(user);

    displayUsers();

   
    document.getElementById("userForm").reset();
});

function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = `Nome: ${user.firstName}, Cognome: ${user.lastName}, Età: ${user.age}, Luogo: ${user.location}`;

    
        const compareButton = document.createElement("button");
        compareButton.classList.add("btn", "btn-secondary", "ml-2");
        compareButton.innerText = "Confronta con un altro utente";
        compareButton.onclick = function () {
            compareWithOtherUser(index);
        };

        listItem.appendChild(compareButton);
        userList.appendChild(listItem);
    });
}

function compareWithOtherUser(index) {
    const selectedUser = users[index];
    let message = "";

    for (let i = 0; i < users.length; i++) {
        if (i !== index) {
            message += selectedUser.compareAge(users[i]) + "\n";
        }
    }

    alert(message);
}
