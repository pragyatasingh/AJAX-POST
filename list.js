document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");

    if (users.length === 0) {
        userList.innerHTML = "<p class='text-center'>No users found.</p>";
    } else {
        users.forEach(user => {
            let div = document.createElement("div");
            div.className = "col-md-4 mb-3";
            div.innerHTML = `
                <div class="card shadow-lg p-3">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                </div>
            `;
            userList.appendChild(div);
        });
    }
});
