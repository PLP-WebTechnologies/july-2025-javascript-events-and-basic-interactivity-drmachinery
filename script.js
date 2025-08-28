// main/script.js
// Part 1: Event Handling


// Click button event
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("clickMessage").textContent = "Button clicked! 🎉";
});

// Mouseover event
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", function() {
  this.style.color = "red";
});
hoverText.addEventListener("mouseout", function() {
  this.style.color = "black";
});

// Part 2: Interactive Elements

const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", function() {
  count--;
  countDisplay.textContent = count;
});

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Simple validation
  if (name === "" || email === "" || password === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email address!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Signup successful! ✅";
  message.style.color = "green";
  form.reset();
});
