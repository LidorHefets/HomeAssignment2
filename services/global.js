


  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("darkModeToggle");
  
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
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

  const input = document.getElementById('skillSearch');
  const tables = document.querySelectorAll('.category-table');

  input.addEventListener('keyup', function () {
    const filter = input.value.toLowerCase();
    tables.forEach(box => {
      const rows = box.querySelectorAll('tbody tr');
      let hasVisible = false;
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const match = text.includes(filter);
        row.style.display = match ? '' : 'none';
        if (match) hasVisible = true;
      });
      box.style.display = hasVisible ? '' : 'none';
    });
  });

 