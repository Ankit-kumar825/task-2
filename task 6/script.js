function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const mood = document.getElementById("moodInput").value;
  const message = document.getElementById("message");

  if (name === "" || mood === "") {
    message.textContent = "Please enter your name and mood!";
    message.className = "show";
    return;
  }

  const hour = new Date().getHours();
  let timeGreeting;

  if (hour < 12) {
    timeGreeting = "Good Morning";
  } else if (hour < 18) {
    timeGreeting = "Good Afternoon";
  } else {
    timeGreeting = "Good Evening";
  }

  message.textContent = timeGreeting + ", " + name + "! You are feeling " + mood + " today.";
  message.className = "show " + mood;
}
