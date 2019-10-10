class Timer {
    constructor( currentSeconds ) {
        this.currentSeconds = currentSeconds;
    }

    render() {
        //  Create DOM
        const timerContainer = document.createElement( 'div' );
        const timerTop = document.createElement( 'div' );
        const timerMid = document.createElement( 'div' );
        const timerMidReset = document.createElement( 'div' );
        const timerMidCounter = document.createElement( 'div' );
        const timerMidStart = document.createElement( 'div' );
        const timerBot = document.createElement( 'div' );

        timerTop.textContent = 'UP';
        timerBot.textContent = 'DOWN';
        timerMidCounter.textContent = `${this.currentSeconds}`;
        timerMidReset.textContent = 'Reset';
        timerMidStart.textContent = 'Start';

        timerContainer.className = 'timer-container';
        timerTop.className = 'top';
        timerMid.className = 'middle';
        timerMidReset.className = 'middle__reset';
        timerMidCounter.className = 'middle__counter';
        timerMidStart.className = 'middle__start';
        timerBot.className = 'bottom';

        timerContainer.appendChild( timerTop );
        timerContainer.appendChild( timerMid );
        timerMid.appendChild( timerMidReset );
        timerMid.appendChild( timerMidCounter );
        timerMid.appendChild( timerMidStart );
        timerContainer.appendChild( timerBot );

        timerContainer.addEventListener( 'click', ( e ) => {
            switch ( e.target.className ) {
                case 'top':
                    timerMidCounter.textContent++;
                    break;
                case 'bottom':
                    timerMidCounter.textContent--;
                    break;
                case 'middle__reset':
                    timerMidCounter.textContent = 0;
                    this.counterFunction( timerMidCounter, true );
                    break;
                case 'middle__start':
                    this.counterFunction( timerMidCounter, false );
                    break;
            }
        } );

        return timerContainer;
    }

    counterFunction( counter, trueOrFalse ) {
        //  The part where the numbers decrement
        const reducer = () => {
            if ( counter.textContent == 0 || trueOrFalse ) {
                clearInterval( countDown );
                console.log( '0 seconds reached, yay!' )
            } else {
                counter.textContent--;
            }
        }
        const countDown = setInterval( reducer, 1000 );
        countDown;
    }

    mount() {
        document.body.appendChild( this.render() );
    }
}

const timer1 = new Timer( 1 );
