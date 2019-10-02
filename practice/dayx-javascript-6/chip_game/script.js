class Chip {
    constructor( chipSize, chipValue ) {
        this.chipSize = chipSize;
        this.chipValue = chipValue;
    }

    generate() {
        //
    }

    mount() {
        //
    }

    removeSequence( thisTarget ) {
        delete thisTarget.id;
        thisTarget.remove();
    }
}

const chipStorage = [];

const gameSetup = {

    theBody: document.getElementsByTagName( 'body' ),

    initialize( number, minValue, maxValue ) {

        for ( let i = 0; i < number; i++ ) {
            chipStorage.push( new Chip(
                1,
                Math.round( Math.random( minValue ) * maxValue ) ) );
        }
    },

    setStage() {

        for ( let i = 0; i < chipStorage.length; i++ ) {

            //  Get interface
            const stage = document.querySelector( '#stage-container' );
            const scoreArea = document.querySelector( '#score-area' ).clientHeight;

            //  Generate random placement
            const randH = Math.min( window.innerHeight - scoreArea, Math.round( ( Math.random() * window.innerHeight ) + scoreArea ) );
            const randW = Math.min( window.innerWidth - 96, Math.round( ( Math.random() * window.innerWidth ) ) );

            //  Generate random colors
            const randR = Math.round( Math.random() * 255 );
            const randG = Math.round( Math.random() * 255 );
            const randB = Math.round( Math.random() * 255 );

            //  Create DOM elements
            const chipDiv = document.createElement( 'div' );
            const chipP = document.createElement( 'p' );

            //  Give chip an ID
            chipP.textContent = `${i}`;

            chipDiv.className = 'chip';
            chipDiv.id = `${i}`;
            chipDiv.style.cssText =
                `
                display: flex;
                justify-content: center;
                align-items: center;
                width: 5rem;
                height: 5rem;
                position: absolute; 
                top:
                ${randH}px;
                left:
                ${randW}px;
                border-radius: 2.5rem;
                background-color: rgb(
                    ${randR},
                    ${randG},
                    ${randB});
                `;

            stage.appendChild( chipDiv );
            chipDiv.appendChild( chipP );

        }
    }
}


const interactionBoy = {
    start() {
        gameSetup.initialize( 25, 3, 10 );
        gameSetup.setStage();
        this.clickyBoy();
    },

    clickyBoy() {
        document.addEventListener( 'click', ( e ) => {

            if ( e.target.className === 'chip' && e.target.id >= 0 ) {
                const theScore = document.querySelector( '.score' );

                theScore.textContent = parseInt( theScore.textContent ) + parseInt( chipStorage[e.target.id].chipValue );

                chipStorage[e.target.id].removeSequence( e.target );

            }
        } )
    }
}