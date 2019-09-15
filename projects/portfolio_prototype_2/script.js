var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;

function createSkillBubbles() {
    var skillArray = document.getElementsByClassName( "skills__list" )[0].innerHTML.split( " " );
    var skillBubbles = "";

    for ( let i = 0; i < skillArray.length; i++ ) {
        document.getElementsByClassName( "skills__list" )[0].innerHTML = "";
        skillBubbles += "<p class='skills__bubble'>" + skillArray[i] + "</p>";
    }

    document.getElementsByClassName( "skills__list" )[0].innerHTML = skillBubbles;
}

//  FUNCTIONS
function getNewHeight() {
    var firstArticle = document.getElementsByClassName( "article__home" )[0];
    var newHeight = height - 64 + "px";
    firstArticle.style.height = newHeight;
    console.log( "New height calculated" );
}

function getWidthOffset() {
    var single = 416;
    var double = 832;
    var triple = 1248;
    var quadruple = 1664;
    var width = document
        .getElementsByClassName( "projects__wrapper" )[0]
        .getClientRects()[0]
        .width;

    var wrapper = document.getElementsByClassName( "projects__wrapper" )[0];
    var newOffset;

    if ( width > single && width < double ) {
        var subtractor = 192;
        var newOffset = width / 2 - subtractor - 16;
    } else if ( width > double && width < triple ) {
        var subtractor = 384;
        var newOffset = width / 2 - subtractor - 32;
    } else if ( width > triple && width < quadruple ) {
        var subtractor = 576;
        var newOffset = width / 2 - subtractor - 48;
    } else if ( width > quadruple ) {
        var subtractor = 768;
        var newOffset = width / 2 - subtractor - 64;
    }

    wrapper.style.transform = `translateX(${newOffset}px)`;

    console.log( wrapper.style.transform );
}

/* function getWidthOffset() {
    var single = 416;
    var double = 832;
    var triple = 1248;
    var quadruple = 1664;
    var width = document
        .getElementsByClassName( "projects__wrapper" )[0]
        .getClientRects()[0]
        .width;
    var wrapper = document.getElementsByClassName( "projects__wrapper" )[0];

    if ( width > single && width < double ) {
        var subtractor = 192;
        var newOffset = width / 2 - subtractor - 16;
        wrapper.style.transform = `translateX(${newOffset}px)`;
    } else if ( width > double && width < triple ) {
        var subtractor = 384;
        var newOffset = width / 2 - subtractor - 16 - 16;
        wrapper.style.transform = `translateX(${newOffset}px)`;
    } else if ( width > triple && width < quadruple ) {
        var subtractor = 576;
        var newOffset = width / 2 - subtractor - 16 - 16 - 16;
        wrapper.style.transform = `translateX(${newOffset}px)`;
    } else if ( width > quadruple ) {
        var subtractor = 768;
        var newOffset = width / 2 - subtractor - 16 - 16 - 16 - 16;
        wrapper.style.transform = `translateX(${newOffset}px)`;
    }

    console.log( wrapper.style.transform );
} */

function openmenu() {
    var menu = document.getElementById( "menu_id" );
    menu.classList.toggle( "hidden" );
}