/*
    Calculator:
        - Value on screen
        - Value in memory
        - Value to operate against
        - Current operator

            func - equals
                    - return result of math function relative to -> operator

            func - add
                    - collect value on screen & store in memory
                    - type in new number
                    - collect value on screen & add ++ memory
                    - output

            func - subtract
                    - collect value on screen & store in memory
                    - type in new number
                    - collect value on screen & subtract -- from -- memory
                    - output

            func - multiply
                    - collect value on screen & store in memory
                    - type in new number
                    - collect value on screen & multiply *X* memory
                    - output

            func - divide
                    - collect value on screen & store in memory
                    - type in new number
                    - collect value on screen & divide -/- memory
                    - output

            func - M - value on screen into memory
            func - MC - clear memory

*/


let MrCalculator = {
        valueOnScreen: 0,
        valueInMemory: 0,
        equalsResult: 0,
        currentOperator: undefined,

        initiateOperation( op ) {
                switch ( this.currentOperator ) {
                        case "Add":
                                this.valueInMemory += this.valueOnScreen;
                                this.equalsResult = this.valueInMemory;
                                break;
                        case "Subtract":
                                this.valueInMemory -= this.valueOnScreen;
                                this.equalsResult = this.valueInMemory;
                                break;
                        case "Multiply":
                                this.valueInMemory *= this.valueOnScreen;
                                this.equalsResult = this.valueInMemory;
                                break;
                        case "Equals":
                                this.equalsResult = this.valueInMemory;
                                this.valueOnScreen = this.equalsResult;
                                this.valueInMemory = 0;
                                break;
                        default:
                                this.valueInMemory = this.valueOnScreen;
                }
                /* this.valueOnScreen = 0; */
                this.currentOperator = op;

                console.log( this.valueOnScreen );
                console.log( this.valueInMemory );
                console.log( this.equalsResult );
        },

        equals() {

                this.initiateOperation( "Equals" );


                console.log( this.valueOnScreen );
                console.log( this.valueInMemory );
                console.log( this.equalsResult );

        },

        add() {
                let a = this.valueInMemory;
                let b = this.valueOnScreen;
                console.log( a + b );
                return a + b;
        },

        subtract( whatToSubtractFrom, whatToSubtract ) {
                let a = whatToSubtractFrom;
                let b = whatToSubtract;
                console.log( a - b );
                return a - b;
        },

        multiply() {
                let value = this.valueInMemory * this.valueOnScreen;
                this.equalsResult = value;
                return value;
        },

        divide() {
                let value = this.valueInMemory / this.valueOnScreen;
                this.equalsResult = value;
                return value;
        }
}

MrCalculator.valueOnScreen = 2;


MrCalculator.initiateOperation( 'Add' );
MrCalculator.valueOnScreen = 3;

MrCalculator.equals();

/* MrCalculator.initiateOperation( 'Subtract' );
MrCalculator.valueOnScreen = 2; */
















//console.log( 'It works!' );
