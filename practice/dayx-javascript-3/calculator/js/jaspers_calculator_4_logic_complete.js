const storage = {
    input: 0,
    memory: 0,
    previous: 0,
    result: 0,

    initialize( initialValue ) {
        this.result = ( parseInt( initialValue ) ) ? initialValue : 0;
        this.input = 0;
        this.memory = 0;
        this.previous = 0;
        calc.pre = "Initialized";
    }

}

const calc = {

    op: undefined,
    pre: undefined,
    repeat: "none",
    history: [],

    add( input, repeat ) {

        this.history.push( repeat );
        this.repeat = repeat;

        if ( input !== null && repeat === false ) {
            this.pre = "Add";
            storage.previous = input;
            storage.result += input;
        } else if ( this.history[this.history.length - 2] === true ) {
            storage.memory += storage.previous;
            storage.result = storage.result + storage.previous;
        }

    },

    multiply( input, repeat ) {

        this.history.push( repeat );
        this.repeat = repeat;

        if ( input !== null && repeat === false ) {
            this.pre = "Multiply";
            storage.previous = input;
            storage.result *= input;
        } else if ( this.history[this.history.length - 2] === true ) {
            storage.memory *= storage.previous;
            storage.result = storage.result * storage.previous;
        }
        console.log( storage );
    },

    divide( input, repeat ) {

        this.history.push( repeat );
        this.repeat = repeat;

        if ( input !== null && repeat === false ) {
            this.pre = "Divide";
            storage.previous = input;
            storage.result /= input;
        } else if ( this.history[this.history.length - 2] === true ) {
            storage.memory /= storage.previous;
            storage.result = storage.result / storage.previous;
        }
        console.log( storage );
    },

    subtract( input, repeat ) {

        this.history.push( repeat );
        this.repeat = repeat;

        if ( input !== null && repeat === false ) {
            this.pre = "Subtract";
            storage.previous = input;
            storage.result = storage.result - input;
        } else if ( this.history[this.history.length - 2] === true ) {
            storage.memory = storage.memory - storage.previous;
            storage.result = storage.result - storage.previous;
        }
        console.log( storage )
        return storage.result;
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

    }

}



storage.initialize( 3 );
calc.equals();

calc.add( 3, false );
calc.equals();

calc.divide( 7.3, false );
calc.equals();

storage.initialize();
calc.subtract( 7.3, false );
calc.equals();
calc.subtract( 7.3, false );
calc.multiply( 10, false );
storage.initialize();

console.log( storage.input );
console.log( storage.memory );
console.log( storage.previous );
console.log( storage.result );


