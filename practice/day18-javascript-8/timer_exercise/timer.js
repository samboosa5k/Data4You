class Timer {
    constructor( currentSeconds, incrementValue ) {
        this.currentSeconds = currentSeconds;
        this.incrementValue = incrementValue;
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
                    this.currentSeconds++;
                    this.update( timerMidCounter );
                    break;
                case 'bottom':
                    this.currentSeconds--;
                    this.update( timerMidCounter );
                    break;
                case 'middle__reset':
                    this.currentSeconds = 0;
                    this.update( timerMidCounter );
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
            if ( this.currentSeconds === 0 || trueOrFalse ) {
                clearInterval( countDown );
                console.log( '0 seconds reached, yay!' )
            } else {
                this.currentSeconds--;
                this.update( counter );
            }
        }
        const countDown = setInterval( reducer, 1000 );
        countDown;
    }

    update( counter ) {
        //  This will get the counter value and change the text content
        counter.textContent = this.currentSeconds;
    }

    mount() {
        document.body.appendChild( this.render() );
    }
}

let timerArray = [];

const spawnTimer = () => {
    const startSec = parseInt( document.querySelector( '.start-seconds' ).value );
    const incSec = parseInt( document.querySelector( '.increment-seconds' ).value );

    const newTimer = new Timer( startSec, incSec );
    timerArray.push( newTimer );
    newTimer.mount();
}