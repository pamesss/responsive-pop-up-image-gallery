    const button = document.querySelector('.header__navbar__hamburger');
const content = document.querySelector('.navbar__box');

window.addEventListener('resize', () => {
    if (window.innerWidth > 428) {
    content.style.display = 'block';}
    if (window.innerWidth < 428) {
        content.style.display = 'none';}
});

function toggleNavbar() {
    if (content.style.display === 'none') {
    content.style.display = 'block';
} else {
    content.style.display = 'none';
}};
button.addEventListener('click', toggleNavbar);


