// Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });
}

// Sidebar Menu
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
}
