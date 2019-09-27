const storage = {
    input: 0,
    memory: 0,
    previous: 0,
    result: 0,
    resultHistory: [],

    initialize( initialValue ) {
        this.result = initialValue;
        this.input = 0;
        calc.pre = "Initialized";
    }

}



const mathLogic = ( operation, input, repeat ) => {

    calc.history.push( repeat );
    calc.repeat = repeat;

    switch ( operation ) {
        case "Add":
            if ( input !== null && repeat === false ) {
                calc.pre = "Add";
                storage.previous = input;
                storage.result += input;
            } else if ( calc.history[calc.history.length - 2] === true ) {
                storage.memory += storage.previous;
                storage.result += storage.previous;
            }
            storage.resultHistory.push( storage.result );
            break;

        case "Multiply":
            if ( input !== null && repeat === false ) {
                calc.pre = "Multiply";
                storage.previous = input;
                storage.result *= input;
            } else if ( calc.history[calc.history.length - 2] === true ) {
                storage.memory *= storage.previous;
                storage.result *= storage.previous;
            }

            storage.resultHistory.push( storage.result );
            break;

        case "Divide":
            if ( input !== null && repeat === false ) {
                calc.pre = "Divide";
                storage.previous = input;
                storage.result /= input;
            } else if ( calc.history[calc.history.length - 2] === true ) {
                storage.memory /= storage.previous;
                storage.result /= storage.previous;
            }

            storage.resultHistory.push( storage.result );
            break;

        case "Subtract":

            if ( input !== null && repeat === false ) {
                calc.pre = "Subtract";
                storage.previous = input;
                storage.result -= input;

            } else if ( calc.history[calc.history.length - 2] === true ) {
                storage.memory -= storage.previous;
                storage.result -= parseInt( storage.previous );
            }
            storage.resultHistory.push( storage.result -= parseInt( storage.previous ) );
            break;
    }
}

const calc = {

    op: undefined,
    pre: undefined,
    repeat: "none",
    history: [],

    add( input, repeat ) {
        return mathLogic( "Add", input, repeat );
    },

    multiply( input, repeat ) {
        return mathLogic( "Multiply", input, repeat );
    },

    divide( input, repeat ) {
        return mathLogic( "Divide", input, repeat );
    },

    subtract( input, repeat ) {
        return mathLogic( "Subtract", input, repeat );
    },

    equals() {
        switch ( this.pre ) {
            case "Initialized":
                break;

            case "Add":
                this.add( null, true );
                break;

            case "Multiply":
                this.multiply( null, true );
                break;

            case "Divide":
                this.divide( null, true );
                break;

            case "Subtract":
                this.divide( null, true );
                break;

            case "Equals":
                this.op = "Equals";
                break;
        }

        if ( this.pre !== "Initialized" ) {
            this.repeat = "repeat";
        } else if ( this.pre === "Initialized" ) {
            this.repeat = "Initialized";
        }

        console.log( this.pre );
        console.log( this.op );
        console.log( this.repeat );
        console.log( this.history );

        console.log( storage.input );
        console.log( storage.previous );
        console.log( storage.result );
    }

}



storage.initialize( 3 );
calc.equals();

calc.add( 3, false );
calc.equals();

calc.multiply( 4, false );
calc.equals();

calc.subtract( 32, false );



console.log( storage.resultHistory );













