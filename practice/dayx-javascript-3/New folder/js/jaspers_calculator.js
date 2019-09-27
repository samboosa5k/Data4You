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
        calc.operator = "opParam";
    } else if ( storage.inMemory === 0 && storage.result !== 0 ) {
        calc.operator = "opParam";
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
            case "Divide":
                result = storage.inMemory / storage.onScreen;
            case "Subtract":
                result = storage.inMemory - storage.onScreen;
        }

        storage.result = result;
        storage.onScreen = sum;
        storage.inMemory = 0;
    }
}

const calc = {
    operator: undefined,


    add() {
        if ( this.operator === undefined ) {
            this.operator = "Add";
        } else if ( storage.inMemory === 0 && storage.result !== 0 ) {
            this.operator = "Add";
            storage.inMemory = storage.result;
            storage.onScreen = 0;
        } else {
            let sum = storage.onScreen + storage.inMemory;
            storage.result = sum;
            storage.onScreen = sum;
            storage.inMemory = 0;
        }
    },

    multiply() {
        if ( this.operator === undefined ) {
            this.operator = "Multiply";
        } else if ( storage.inMemory === 0 && storage.result !== 0 ) {
            this.operator = "Multiply";
            storage.inMemory = storage.result;
            storage.onScreen = 0;
        } else {
            let product = storage.onScreen * storage.inMemory;
            storage.result = product;
            storage.onScreen = product;
            storage.inMemory = 0;
        }
    },

    divide() {
        if ( this.operator === undefined ) {
            this.operator = "Divide";
        } else if ( storage.inMemory === 0 && storage.result !== 0 ) {
            this.operator = "Divide";
            storage.inMemory = storage.result;
            storage.onScreen = 0;
        } else {
            let product = storage.inMemory / storage.onScreen;
            storage.result = product;
            storage.onScreen = product;
            storage.inMemory = 0;
        }
    },

    subtract() {
        if ( this.operator === undefined ) {
            this.operator = "Subtract";
        } else if ( storage.inMemory === 0 && storage.result !== 0 ) {
            this.operator = "Subtract";
            storage.inMemory = storage.result;
            storage.onScreen = 0;
        } else {
            let product = storage.inMemory - storage.onScreen;
            storage.result = product;
            storage.onScreen = product;
            storage.inMemory = 0;
        }
    },

    equals() {
        if ( this.operator === undefined ) {
            storage.result = storage.inMemory;
        } else if ( storage.onScreen === storage.result && storage.inMemory === 0 ) {
            return;
        } else if ( this.operator === "Add" ) {
            this.add();
        } else if ( this.operator === "Multiply" ) {
            this.multiply();
        } else if ( this.operator === "Divide" ) {
            this.divide();
        } else if ( this.operator === "Subtract" ) {
            this.subtract();
        }
    }
}


storage.onScreen = 3;
storage.initialize( storage.onScreen );
//
calc.add();
storage.onScreen = 7;
calc.equals();
//
calc.add();
storage.onScreen = 7;
calc.equals();
//
calc.multiply();
storage.onScreen = 7;
calc.equals();
//
calc.divide();
storage.onScreen = 67;
calc.equals();
//
calc.add();
storage.onScreen = 143;
calc.equals();
//
calc.subtract();
storage.onScreen = 33;
calc.equals();
//
calc.multiply();
storage.onScreen = 7;
calc.equals();


console.log( calc.operator );
console.log( storage.onScreen );
console.log( storage.inMemory );
console.log( storage.result );
