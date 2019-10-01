document.addEventListener( 'DOMContentLoaded', () => {
    const menuButtonC = document.querySelector( '.menu-button-container' );
    const slideMenu = document.querySelector( '.slide-menu' );

    menuButtonC.addEventListener( 'mouseenter', () => {
        slideMenu.classList.add( 'slide-menu__hover' );
    } );

    slideMenu.addEventListener( 'mouseleave', () => {
        slideMenu.classList.remove( 'slide-menu__hover' );
    } );
} )