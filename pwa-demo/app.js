// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(reg => console.log("SW Registered", reg))
    .catch(err => console.error("SW Registration failed", err));
}

// Detect online/offline
const status = document.getElementById("status");
window.addEventListener("online", () => status.textContent = "Status: Online");
window.addEventListener("offline", () => status.textContent = "Status: Offline");

// Notes feature with localStorage
const input = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");

function renderNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notesList.innerHTML = "";
  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  if (input.value.trim() !== "") {
    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    renderNotes();
  }
});

// Load notes on page load
renderNotes();
