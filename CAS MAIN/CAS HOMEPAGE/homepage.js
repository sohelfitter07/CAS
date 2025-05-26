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


const words = ['Repair', 'Installation', 'Maintenance', 'Project'];
    const wrapper = document.getElementById('wordWrapper');
    const leftText = document.getElementById('leftText');
    const rightText = document.getElementById('rightText');

    let index = 0;
    const wordHeight = 3.5 * 16; // 3.5rem to pixels

    setInterval(() => {
      // Animate left and right outward
      leftText.style.transform = 'translateX(-100px)';
      rightText.style.transform = 'translateX(100px)';

      // Move word wrapper up
      index = (index + 1) % words.length;
      wrapper.style.transform = `translateY(-${index * wordHeight}px)`;

      // Return side text after delay
      setTimeout(() => {
        leftText.style.transform = 'translateX(35px)';
        rightText.style.transform = 'translateX(-35px)';
      }, 600);
    }, 2000);