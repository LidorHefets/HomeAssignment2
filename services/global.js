


  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("darkModeToggle");
  
    // בעת טעינת העמוד – לבדוק אם היה מצב כהה
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      // שמירת מצב בלוקל סטורג'
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleBtn.textContent = "☀️";
      } else {
        localStorage.setItem("darkMode", "disabled");
        toggleBtn.textContent = "🌙";
      }
    });


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

  
    const isExpanded = navMenu.classList.contains("show");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });
  });

 