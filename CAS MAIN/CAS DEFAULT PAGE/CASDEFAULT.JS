// Select elements
const hamburger = document.getElementById("hamburger");
const navbarList = document.querySelector(".navbarList");

// Toggle navbar menu on hamburger click
hamburger.addEventListener("click", () => {
  navbarList.classList.toggle("open"); // Show/hide menu
  hamburger.classList.toggle("close"); // Rotate icon (optional)
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