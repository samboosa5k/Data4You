/* 
######################
# SETUP              #
######################
*/

const screen = document.querySelector( '.calc__result' );
const input = document.querySelector( '.calc__input' );

document.addEventListener( 'DOMContentLoaded', () => {
    // Reset input field
    input.value = 0;
    // Listen for input
    inputDetection();
    // Wait for operation button presses
    mathOpDetection();
} );

/* 
######################
# INPUT FIELD        #
######################
*/

const inputDetection = () => {
    input.addEventListener( 'input', inputCallback );
};

const inputCallback = () => {
    if ( calc.pre === undefined || calc.pre === "Initialized" ) {
        storage.initialize( parseInt( input.value ) );
    } else {
        storage.input = parseInt( input.value );
    }
};

/* 
######################
# MATH               #
######################
*/

let mathOp = undefined;

const doMath = ( theOperation ) => {
    if ( calc.pre === theOperation ) {
        mathLogic( theOperation, storage.input, false )
    }
    input.value = 0;
    mathOp = theOperation;
    calc.pre = theOperation;
    console.log( theOperation + ' clicked' );
}

const mathOpDetection = () => {
    document.addEventListener( 'click', ( e ) => {
        switch ( e.target.id ) {
            case 'btn-clear':
                storage.initialize();
                break;

            case 'btn-add':
                doMath( "Add" );
                break;

            case 'btn-divide':
                doMath( "Divide" );
                break;

            case 'btn-multiply':
                doMath( "Multiply" );
                break;

            case 'btn-subtract':
                doMath( "Subtract" );
                break;

            case 'btn-equals':
                mathLogic( mathOp, storage.input, false );
                calc.equals();
                screen.textContent = storage.result;
                console.log( storage.result );
                break;
        }
    } )
};







