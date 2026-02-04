// =====================
// ANNOUNCEMENTS MODULE
// =====================

const announcements = [
  {
    title: "New Semester Enrollment",
    message: "Enrollment starts on July 1. Please prepare your requirements.",
    date: "2026-07-01"
  },
  {
    title: "Guest Lecture: Cybersecurity",
    message: "Join our guest lecture this Friday at 2PM in Room 204.",
    date: "2026-06-25"
  },
  {
    title: "Programming Contest",
    message: "Coding contest for CCS students on June 30. Register now!",
    date: "2026-06-30"
  }
];

function renderAnnouncements(filter = "") {
  const list = document.getElementById("announcementList");
  if (!list) return;

  list.innerHTML = "";

  const filtered = announcements.filter(a =>
    a.title.toLowerCase().includes(filter.toLowerCase()) ||
    a.message.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(a => {
    const li = document.createElement("li");
    li.classList.add("announcement-item");

    li.innerHTML = `
      <h3>${a.title}</h3>
      <p>${a.message}</p>
      <span>${a.date}</span>
    `;
    list.appendChild(li);
  });
}

// Search
const searchInput = document.getElementById("announcementSearch");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    renderAnnouncements(e.target.value);
  });
}

// Add Announcement (Admin Button)
const addBtn = document.getElementById("addAnnouncementBtn");
if (addBtn) {
  addBtn.addEventListener("click", () => {
    const title = prompt("Enter announcement title:");
    const message = prompt("Enter announcement message:");
    const date = new Date().toISOString().slice(0, 10);

    if (title && message) {
      announcements.unshift({ title, message, date });
      renderAnnouncements();
    }
  });
}

// Initial render
renderAnnouncements();
