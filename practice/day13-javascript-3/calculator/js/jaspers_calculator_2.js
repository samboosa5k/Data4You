const storage = {
    onScreen: 0,
    inMemory: 0,
    result: 0,

    initialize( initialValue ) {
        this.inMemory = initialValue;
    }
}

const doMath = ( opParam ) => {
    if ( calc.operator === undefined ) {
        calc.operator = opParam;
    } else if ( storage.inMemory === 0 && storage.result !== 0 ) {
        calc.operator = opParam;
        storage.inMemory = storage.result;
        storage.onScreen = 0;
    } else {
        let result;
        switch ( opParam ) {
            case "Add":
                result = storage.onScreen + storage.inMemory;
                break;
            case "Multiply":
                result = storage.onScreen * storage.inMemory;
                break;
            case "Divide":
                result = storage.inMemory / storage.onScreen;
                break;
            case "Subtract":
                result = storage.inMemory - storage.onScreen;
                break;
        }

        storage.result = result;
        storage.onScreen = result;
        storage.inMemory = 0;
    }
}

const calc = {
    operator: undefined,

    equals() {
        if ( this.operator === undefined ) {
            storage.result = storage.inMemory;
        } else if ( storage.onScreen === storage.result && storage.inMemory === 0 ) {
            return;
        } else if ( this.operator === "Add" ) {
            doMath( "Add" );
        } else if ( this.operator === "Multiply" ) {
            doMath( "Multiply" );
        } else if ( this.operator === "Divide" ) {
            doMath( "Divide" );
        } else if ( this.operator === "Subtract" ) {
            doMath( "Subtract" );
        }
    }
}


storage.onScreen = 3;
storage.initialize( storage.onScreen );
//
doMath( "Add" );
storage.onScreen = 1;
calc.equals();
//
doMath( "Add" );
storage.onScreen = 1;
calc.equals();
//
doMath( "Multiply" );
storage.onScreen = 7;
calc.equals();
//
doMath( "Divide" );
storage.onScreen = 3;
calc.equals();

console.log( calc.operator );
console.log( storage.onScreen );
console.log( storage.inMemory );
console.log( storage.result );
