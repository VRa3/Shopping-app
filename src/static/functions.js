export const toggleBagView = () => {
    const cartWrapper = document.querySelector('#cart-wrapper');
    const body = document.querySelector('body');
    const navbarList = document.querySelector('.navbar__list');

    if (cartWrapper.classList.contains('show')) {
        cartWrapper.classList.remove('show');
        body.classList.remove('no-scroll');
        return;
    }

    cartWrapper.classList.add('show');
    body.classList.add('no-scroll');
    navbarList.classList.remove('opened');
};