function getNewHeight() {
    var height = document.documentElement.clientHeight;
    var firstArticle = document.getElementsByClassName( "article__home" );
    console.log( height );
}

function openmenu() {
    var menu = document.getElementById( "menu_id" );
    menu.classList.toggle( "hidden" );
}