const input = document.getElementById("bookmark-input");
const list = document.getElementById("bookmark-list");
const verify = document.getElementById("verify");

// Load bookmarks from localStorage on page load
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
  saved.forEach(item => addToList(item));
};

// Adding the bookmark functionality for the input
function addBookmark() {
  const value = input.value.trim();
  if (value === "") return;

  // Saving the bookmark  to localStorage
  const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
  saved.push(value);
  localStorage.setItem("bookmarks", JSON.stringify(saved));

  // Add to UI
  addToList(value);

  // lets show the verification animation
  verify.classList.remove("show"); 
  void verify.offsetWidth; 
  verify.classList.add("show");

  // Clearing the input field
  input.value = "";
}

// Adding items to list
function addToList(item) {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}

// the functionality of the clear all button
function clearBookmarks() {
  localStorage.removeItem("bookmarks");
  list.innerHTML = "";
}
