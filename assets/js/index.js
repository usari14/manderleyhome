const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const closeSidebar = document.getElementById('closeSidebar');

document.addEventListener("DOMContentLoaded", () => {
    sidebar.style.display = "flex";
    sidebar.classList.add('translate-x-full');
});

sidebarToggle.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('translate-x-full');
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
    }
});


// active class

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-link");
    function setActive(event) {
        menuLinks.forEach(link => link.classList.remove("border-b-2", "border-black", "pb-1"));
        event.currentTarget.classList.add("border-b-2", "border-black", "pb-1");
        localStorage.setItem("activeLink", event.currentTarget.getAttribute("href"));
    }
    menuLinks.forEach(link => link.addEventListener("click", setActive));
    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
        menuLinks.forEach(link => {
            if (link.getAttribute("href") === activeLink) {
                link.classList.add("border-b-2", "border-black", "pb-1");
            }
        });
    }
});



// accordian icon
document.querySelectorAll('[data-accordion-target]').forEach(button => {
    button.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-accordion-target'));
        const icon = this.querySelector('.accordion-icon');
        document.querySelectorAll('[data-accordion-target]').forEach(btn => {
            const otherTarget = document.querySelector(btn.getAttribute('data-accordion-target'));
            const otherIcon = btn.querySelector('.accordion-icon');
            if (otherTarget !== target) {
                otherTarget.classList.add('hidden');
                otherIcon.textContent = '+';
            }
        });
        if (target.classList.contains('hidden')) {
            target.classList.remove('hidden');
            icon.textContent = '−';
        } else {
            target.classList.add('hidden');
            icon.textContent = '+';
        }
    });
});



// service page 

$(document).ready(function () {
    $(".expertise-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["<span class='custom-prev'>&#10094;</span>", "<span class='custom-next'>&#10095;</span>"],
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});





