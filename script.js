const words = ["extraordinary", "revolutionary", "game-changing", "mind-blowing"];
let index = 0;
const wordElement = document.getElementById("rotating-word");

setInterval(() => {
  index = (index + 1) % words.length;
  wordElement.textContent = words[index];
}, 1000);

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
      form.reset();
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
});
