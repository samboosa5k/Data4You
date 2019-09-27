const storage = {
    input: 0,
    memory: 0,
    previous: 0,
    result: 0,

    initialize( initialValue ) {
        this.result = initialValue;
        this.input = 0;
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
            storage.result -= input;
        } else if ( this.history[this.history.length - 2] === true ) {
            storage.memory -= storage.previous;
            storage.result = storage.result - storage.previous;
        }
        console.log( storage );
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
        console.log( storage.memory );
        console.log( storage.previous );
        console.log( storage.result );
    }

}



storage.initialize( 3 );
calc.equals();

calc.add( 3, false );
calc.equals();

calc.add( 3, false );
calc.equals();

calc.multiply( 10, false );
calc.equals();
calc.equals();
calc.equals();

calc.add( 250, false );
calc.equals();

calc.divide( 34, false );
calc.equals();
calc.equals();

calc.subtract( 3.5, false );
calc.equals();










