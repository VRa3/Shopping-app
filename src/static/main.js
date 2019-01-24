document.addEventListener("DOMContentLoaded", function(event) {

    const collapseMenu = () => {
        const navbarList = document.querySelector('.navbar__list');
        const html = document.querySelector('html');
        const cartWrapper = document.querySelector('#cart-wrapper');

        if (navbarList.classList.contains('opened')) {
            navbarList.classList.remove('opened');
            html.classList.remove('no-scroll');
            return;
        }

        navbarList.classList.add('opened');
        html.classList.add('no-scroll');
        cartWrapper.classList.remove('show')
    };

    const menuChevron = document.querySelector('.navbar__chevron');
    menuChevron.addEventListener('click', () => {
        collapseMenu()
    });
});
