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

const menuLinks = document.querySelectorAll(".menu-link");

function setActive(event) {
    menuLinks.forEach(link => link.classList.remove("border-b", "border-black", "pb-1"));
    event.target.classList.add("border-b", "border-black", "pb-1");
}
menuLinks.forEach(link => link.addEventListener("click", setActive));


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


