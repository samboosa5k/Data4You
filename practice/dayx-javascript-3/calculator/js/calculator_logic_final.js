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

    equals() {
        switch ( this.pre ) {
            case "Initialized":
                console.log( storage.result );
                break;

            case "Add":
                mathLogic( "Add", null, true );
                break;

            case "Multiply":
                mathLogic( "Multiply", null, true );
                break;

            case "Divide":
                mathLogic( "Divide", null, true );
                break;

            case "Subtract":
                mathLogic( "Subtract", null, true );
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

function mathLogic( operation, input, repeat ) {
    calc.history.push( repeat );
    calc.repeat = repeat;

    let prev = storage.previous;
    let res = storage.result;
    let mem = storage.mem;

    if ( input !== null && repeat === false ) {
        calc.pre = operation;
        storage.previous = input;
        switch ( operation ) {
            case "Add":
                storage.result = res + input;
                break;
            case "Multiply":
                storage.result = res * input;
                break;
            case "Divide":
                storage.result = res / input;
                break;
            case "Subtract":
                storage.result = res - input;
                break;
        }

    } else if ( calc.history[calc.history.length - 2] === true ) {
        switch ( operation ) {
            case "Add":
                storage.mem = mem + prev;
                storage.result = res + prev;
                break;
            case "Multiply":
                storage.mem = mem * prev;
                storage.result = res * prev;
                break;
            case "Divide":
                storage.mem = mem / prev;
                storage.result = res / prev;
                break;
            case "Subtract":
                storage.mem = mem - prev;
                storage.result = res - prev;
                break;
        }
    }

}

/*

storage.initialize( 3 );
calc.equals();


mathLogic( "Add", 10, false );
calc.equals();

mathLogic( "Subtract", 10, false );
mathLogic( "Multiply", 10, false );
calc.equals();
calc.equals();
storage.initialize( );
 */








/* console.log( storage.input );
console.log( storage.memory );
console.log( storage.previous );
console.log( storage.result );
console.log( calc.history );
console.log( calc.pre ); */





