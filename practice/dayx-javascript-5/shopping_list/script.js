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

    add( name, amount ) {
        const obj = { name: `'${name}'`, amount: parseInt( amount ) };
        shoppingList.push( obj );
        this.showAll();
    },

    delete( id ) {
        let listHTML = document.querySelector( '.list' );
        delete listHTML.children[id].innerHTML;
        shoppingList = shoppingList.splice( 1, id );
        this.showAll();
    },

    showAll() {
        let listHTML = document.querySelector( '.list' );
        listHTML.innerHTML = "";
        for ( let i = 0; i < shoppingList.length; i++ ) {
            listHTML.innerHTML += `
                    <div class="item">
                        <p class="item-title">${shoppingList[i]["name"]}</p>
                        <p class="item-amount">${shoppingList[i]["amount"]}</p>
                        <div id="${i}" class="item-remove">Click!</div>
                    </div>
            `;
        }
    }
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

    document.addEventListener( 'click', ( e ) => {

        if ( e.target.classList[0] === 'item-remove' ) {
            listManipulator.delete( e.target.id );
        };


    } )
} )