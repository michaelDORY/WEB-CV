const menuIcon = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu__body");
const arrow = document.querySelector(".arrow-up");

menuIcon.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    arrow.classList.toggle("_non-active");
});

document.querySelectorAll('a[data-goto]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let whereToGo = this.getAttribute('data-goto').substring(1);

        const scrollTarget = document.getElementById(whereToGo);

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - scrollY;

        if (menuBody.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            menuIcon.classList.remove("_active");
            menuBody.classList.remove("_active");
            arrow.classList.remove("_non-active");
        }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});