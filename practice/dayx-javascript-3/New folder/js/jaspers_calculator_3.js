const storage = {
    onScreen: 0,
    inMemory: 0,
    repeatVal: undefined,
    result: 0,

    initialize( initialValue ) {
        this.inMemory = initialValue;
    }
}

const doMath = ( opParam ) => {
    let result;
    let test = storage.onScreen === storage.repeatVal === storage.inMemory;
    switch ( opParam ) {
        case "Add":
            if ( calc.op === undefined ) {
                result = storage.result + storage.repeatVal;
                console.log( storage.onScreen )
                storage.result = result;
            } else if ( calc.previousOp === "Add" ) {
                storage.repeatVal = 0;
                storage.onScreen = 0;
                storage.inMemory = 0;
            } else {
                result = storage.onScreen + storage.inMemory;
                storage.result = result;
            }
            calc.operator = opParam;

    }
}

const calc = {
    operator: undefined,
    previousOp: undefined,

    equals( operation ) {
        let op = operation;

        if ( op === undefined && this.operator !== undefined ) {
            this.previousOp = "Equals";
            doMath( this.operator );
        }

        if ( op === "Add" ) {
            this.previousOp = "Add";
            storage.repeatVal = storage.onScreen;

            doMath( "Add" );
        } else if ( op === "Multiply" ) {
            storage.repeatVal = storage.onScreen;

            doMath( "Multiply" );
        } else if ( op === "Divide" ) {
            storage.repeatVal = storage.onScreen;

            doMath( "Divide" );
        } else if ( op === "Subtract" ) {
            storage.repeatVal = storage.onScreen;

            doMath( "Subtract" );
        }

    }
}


storage.onScreen = 3;
storage.initialize( storage.onScreen );

//
calc.equals( "Add" );
storage.onScreen = 3;

// Equals spam
calc.equals();
calc.equals();
calc.equals();
calc.equals();

//
calc.equals("Add");




console.log( calc.operator );
console.log( calc.previousOp );
console.log( calc.op );

console.log( storage.onScreen );
console.log( storage.repeatVal );
console.log( storage.inMemory );
console.log( storage.result );
