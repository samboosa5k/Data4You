/* 
######################
# SETUP              #
######################
*/

const mem = document.querySelector( '.calc__result' );
const input = document.querySelector( '.calc__input' );

document.addEventListener( 'DOMContentLoaded', () => {
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

const mathOpDetection = () => {
    document.addEventListener( 'click', ( e ) => {
        switch ( e.target.id ) {
            case 'btn-clear':
                storage.initialize();
                break;

            case 'btn-add':
                if ( calc.pre === "Add" ) {
                    mathLogic( "Add", storage.input, false )
                }
                mathOp = "Add";
                calc.pre = "Add";
                console.log( 'add clicked' );
                break;

            case 'btn-divide':
                if ( calc.pre === "Divide" ) {
                    mathLogic( "Divide", storage.input, false )
                }
                mathOp = "Divide";
                calc.pre = "Divide";
                console.log( 'Divide clicked' );
                break;

            case 'btn-multiply':
                if ( calc.pre === "Multiply" ) {
                    mathLogic( "Multiply", storage.input, false )
                }
                mathOp = "Multiply";
                calc.pre = "Multiply";
                console.log( 'Multiply clicked' );
                break;

            case 'btn-subtract':
                if ( calc.pre === "Subtract" ) {
                    mathLogic( "Subtract", storage.input, false )
                }
                mathOp = "Subtract";
                calc.pre = "Subtract";
                console.log( 'Subtract clicked' );
                break;


            case 'btn-equals':
                mathLogic( mathOp, storage.input, false );
                calc.equals();
                console.log( storage.result );
                break;
        }
    } )
};







