document.addEventListener("DOMContentLoaded", () => {
    // Dropdown Menu
    const dropdowns = document.querySelectorAll("nav ul li");
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", () => {
            const subMenu = dropdown.querySelector("ul.dropdown");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        });

        dropdown.addEventListener("mouseout", () => {
            const subMenu = dropdown.querySelector("ul.dropdown");
            if (subMenu) {
                subMenu.style.display = "none";
            }
        });
    });

    // Smooth Scrolling for "Read More" button
    const readMoreBtn = document.querySelector(".our-story button");
    readMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const ourStorySection = document.querySelector(".our-story");
        window.scrollTo({
            top: ourStorySection.offsetTop,
            behavior: "smooth"
        });
    });
});

// JavaScript for responsive behavior

// Example: Toggle navigation menu for small screens
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
