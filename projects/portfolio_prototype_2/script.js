function getNewHeight() {
    var height = document.documentElement.clientHeight;
    var firstArticle = document.getElementsByClassName( "article__home" )[0];
    var newHeight = height - 64 + "px";
    firstArticle.style.height = newHeight;
    console.log( height );
    console.log( newHeight );
}

function openmenu() {
    var menu = document.getElementById( "menu_id" );
    menu.classList.toggle( "hidden" );
}