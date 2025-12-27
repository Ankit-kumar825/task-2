const container = document.getElementById("destinationContainer");
const loadBtn = document.getElementById("loadBtn");

// Async function with await
async function fetchDestinations() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Promise chaining
function loadData() {
  fetchDestinations()
    .then(destinations => {
      displayDestinations(destinations);
    })
    .catch(error => {
      console.log("Failed:", error);
    });
}

// DOM Manipulation
function displayDestinations(destinations) {
  container.innerHTML = "";

  destinations.slice(0, 6).forEach(place => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${place.name}</h3>
      <p><strong>City:</strong> ${place.address.city}</p>
      <p><strong>Email:</strong> ${place.email}</p>
    `;

    container.appendChild(card);
  });
}

// Button Event
loadBtn.addEventListener("click", loadData);
