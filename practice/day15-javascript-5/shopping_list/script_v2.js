/* 
    THE LIST
*/

let shoppingList = [
    { name: 'Beer variant 1', amount: 6 },
    { name: 'Beer variant 2', amount: 4 },
    { name: 'Beer variant 3', amount: 2 },
    { name: 'Beer variant 4', amount: 8 },
    { name: 'Dutch cheese', amount: 5 },
    { name: 'Czech cheese', amount: 3 },
    { name: 'English cheese', amount: 1 },
];


/* 
    LIST METHODS
*/

const listManipulator = {
    //  Object constants
    listHTML: undefined,

    //  Methods
    add( name, amount ) {
        const obj = { name: `'${name}'`, amount: parseInt( amount ) };
        createEntry( this.listHTML, name, amount, listHTML.children.length );
        shoppingList.push( obj );
    },

    toggleCheck( target ) {
        target.classList.toggle( 'item--checked' );
    },

    deleteItem( target ) {
        this.listHTML.removeChild( target.parentElement );
        shoppingList.splice( target.id, 1 );

    },

    showAll() {
        const listBefore = document.querySelector( '.list' );
        for ( let i = 0; i < shoppingList.length; i++ ) {
            createEntry( listBefore, shoppingList[i]["name"], shoppingList[i]["amount"], i );
        }
        this.listHTML = document.querySelector( '.list' );
    }
}

/* 
    HELPERS
*/

const createEntry = ( theList, name, amount, iterator ) => {
    theList.innerHTML += `
                    <div class="item">
                        <p class="item-title">${name}</p>
                        <p class="item-amount">${amount}</p>
                        <p class="check-button">Check</p>
                        <div id="${iterator}" class="item-remove">Remove!</div>
                    </div>
            `;
}

/* 
    DOM loaded
*/

document.addEventListener( 'DOMContentLoaded', () => {
    const submit = document.querySelector( '#new_prodSubmit' );

    //  Show all
    listManipulator.showAll();

    //  Handling product submission
    submit.addEventListener( 'click', ( e ) => {
        const prodName = document.querySelector( '#new_prodName' );
        const prodAmt = document.querySelector( '#new_prodAmt' );

        e.preventDefault();

        if ( prodName.value !== "" && prodAmt.value !== "" ) {
            listManipulator.add( prodName.value, prodAmt.value );
        } else {
            console.log( "A field is empty" );
        }
    } );

    //  Handle other clicks   
    document.addEventListener( 'click', ( e ) => {
        if ( e.target.classList[0] === 'item-remove' ) {
            listManipulator.deleteItem( e.target );
        } else if ( e.target.classList[0] === 'check-button' ) {
            listManipulator.toggleCheck( e.target.parentElement );
        };


    } )
} )