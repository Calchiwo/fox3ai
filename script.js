const words = ["extraordinary", "revolutionary", "game-changing", "mind-blowing"];
let index = 0;
const wordElement = document.getElementById("rotating-word");

setInterval(() => {
  wordElement.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % words.length;
    wordElement.textContent = words[index];
    wordElement.style.opacity = 1;
  }, 300); // fade out duration
}, 3000); // cycle every 3s

// Netlify Form Submission
const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = {
    "form-name": "waitlist",
    email: form.email.value,
  };

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    });

    if (response.ok) {
      form.reset();
      form.style.display = "none";
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
});
