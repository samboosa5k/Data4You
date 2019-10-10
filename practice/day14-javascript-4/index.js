document.addEventListener( 'DOMContentLoaded', ( event ) => {
    const padlock = document.querySelector( '.padlock' );
    const message = document.querySelector( '.right p' );
    padlock.addEventListener( 'mouseenter', ( e ) => {
        message.style.display = 'block';
    } );
    padlock.addEventListener( 'mouseleave', ( e ) => {
        message.style.display = 'none';
    } )
} )