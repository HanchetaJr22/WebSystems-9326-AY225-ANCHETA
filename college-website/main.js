/* ====== ALL-IN-ONE JS ====== */

/* ===== Programs Tabs ===== */
function showProgram(id) {
  const programs = document.querySelectorAll(".program");

  programs.forEach(p => {
    p.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

/* Automatically show first program */
document.addEventListener("DOMContentLoaded", () => {
  const firstProgram = document.querySelector(".program");
  if (firstProgram) {
    firstProgram.style.display = "block";
  }
});


/* ===== Faculty Search ===== */
const searchInput = document.getElementById("search");
const faculty = document.querySelectorAll("#facultyList li");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    faculty.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(value) ? "block" : "none";
    });
  });
}


/* ===== Announcements ===== */
const announcements = [
  "Enrollment opens May 10",
  "IT Week starts June 5",
  "Final exams schedule released",
  "New Lab Orientation on June 15",
  "Scholarship Application Deadline: July 20"
];

const list = document.getElementById("announcementList");

if (list) {
  announcements.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}


/* ===== Contact Form Validation ===== */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error");

    error.className = "";
    error.textContent = "";

    if (!name || !email || !message) {
      error.textContent = "All fields are required. Please complete the form.";
      error.className = "error";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      error.textContent = "Please enter a valid email address.";
      error.className = "error";
      return;
    }

    if (message.length < 10) {
      error.textContent = "Message must be at least 10 characters long.";
      error.className = "error";
      return;
    }

    error.textContent = "Thank you! Your message has been sent successfully.";
    error.className = "success";
    this.reset();
  });
}
