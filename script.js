const words = ["extraordinary", "revolutionary", "game-changing", "mind-blowing"];
let index = 0;
const wordElement = document.getElementById("rotating-word");

// Slowed down interval to 3s
setInterval(() => {
  index = (index + 1) % words.length;
  wordElement.textContent = words[index];
}, 3000);

// Netlify form handling
const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
      form.style.display = "none"; // hide form on success
    } else {
      throw new Error("Form failed");
    }
  } catch (error) {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
});
