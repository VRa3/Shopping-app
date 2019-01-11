document.addEventListener("DOMContentLoaded", function(event) {

    const menuChevron = document.querySelector('.navbar__chevron');
    menuChevron.addEventListener('click', () => {
        const navbarList = document.querySelector('.navbar__list');
        const body = document.querySelector('body');
        const html = document.querySelector('html');

        navbarList.classList.toggle('opened');
        body.classList.toggle('no-scroll');
        html.classList.toggle('no-scroll');
    });

});
