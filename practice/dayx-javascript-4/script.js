document.addEventListener( "DOMContentLoaded", ( e ) => {
    const button = document.querySelector( ".clickChange" );
    button.addEventListener( "click", ( event ) => {
        document.querySelector( ".changeThis" ).textContent = "Changed";
    } )
} )