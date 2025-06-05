const userDataContainer = document.getElementById("user-data");
const errorElement = document.getElementById("error");

function fetchUserData() {
  userDataContainer.innerHTML = "";
  errorElement.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const div = document.createElement("div");
        div.classList.add("user-card");
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userDataContainer.appendChild(div);
      });
    })
    .catch((error) => {
      errorElement.textContent = "Error fetching data: " + error.message;
    });
}

// Fetch data when the page loads
window.onload = fetchUserData;
