const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("navbarList");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      if (dropdown.style.maxHeight && dropdown.style.maxHeight !== '0px') {
        dropdown.style.maxHeight = '0px';
        dropdown.style.padding = '0 0';
      } else {
        dropdown.style.maxHeight = '500px'; // or calculate scrollHeight
        dropdown.style.padding = '10px 0';
      }
    }
  });
});
