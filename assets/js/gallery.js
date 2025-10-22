// Firebase references
const storage = firebase.storage();
const db = firebase.database().ref("gallery");

const galleryGrid = document.getElementById("galleryGrid");
const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const addUrlBtn = document.getElementById("addUrlBtn");
const imageUrl = document.getElementById("imageUrl");
const modalImg = document.getElementById("modalImg");
const deleteBtn = document.getElementById("deleteBtn");

let currentImageKey = null;

// Fetch images from Firebase
db.on("value", snapshot => {
  const data = snapshot.val() || {};
  galleryGrid.innerHTML = "";
  Object.entries(data).forEach(([key, url]) => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6";
    col.innerHTML = `<img src="${url}" data-key="${key}">`;
    galleryGrid.appendChild(col);
  });
});

// Upload from device
uploadBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const storageRef = storage.ref("gallery/" + file.name);
  storageRef.put(file).then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => db.push(url))
  .catch(console.error);
});

// Add image from URL
addUrlBtn.addEventListener("click", () => {
  const url = imageUrl.value.trim();
  if (url) {
    db.push(url);
    imageUrl.value = "";
  }
});

// Open modal
galleryGrid.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    currentImageKey = e.target.dataset.key;
    modalImg.src = e.target.src;
    new bootstrap.Modal(document.getElementById("imageModal")).show();
  }
});

// Delete image
deleteBtn.addEventListener("click", () => {
  if (currentImageKey) {
    db.child(currentImageKey).remove();
    bootstrap.Modal.getInstance(document.getElementById("imageModal")).hide();
  }
});
