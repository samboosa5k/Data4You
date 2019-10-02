class Chip {
    constructor( chipSize, chipColor, chipValue ) {
        this.chipSize = chipSize;
        this.chipColor = chipColor;
        this.chipValue = chipValue;
    }
}


const gameLogic = {

    chipStorage: [],

    theBody: document.getElementsByTagName( 'body' ),

    initialize( number, minValue, maxValue ) {

        for ( let i = 0; i < number; i++ ) {
            this.chipStorage.push( new Chip(
                1,
                "red",
                Math.round( Math.random( minValue ) * maxValue ) ) );

        }
    },

    setStage() {

        for ( let i = 0; i < this.chipStorage.length; i++ ) {

            //  Get interface
            const stage = document.querySelector( '#stage-container' );
            const scoreArea = document.querySelector( '#score-area' ).clientHeight;

            //  Generate random placement
            const randH = Math.min( window.innerHeight - scoreArea, Math.round( ( Math.random() * window.innerHeight ) + scoreArea ) );
            const randW = Math.min( window.innerWidth - 96, Math.round( ( Math.random() * window.innerWidth ) ) );

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
                    ${Math.round( Math.random() * 255 )},
                    ${Math.round( Math.random() * 255 )},
                    ${Math.round( Math.random() * 255 )});
                `;

            stage.appendChild( chipDiv );
            chipDiv.appendChild( chipP );

        }
    }
}


const interactionBoy = {
    start() {
        gameLogic.initialize( 25, 3, 10 );
        gameLogic.setStage();
        this.clickyBoy();
    },

    clickyBoy() {
        document.addEventListener( 'click', ( e ) => {

            if ( e.target.className === 'chip' && e.target.id >= 0 ) {
                const theScore = document.querySelector( '.score' );

                theScore.textContent = parseInt( theScore.textContent ) + parseInt( gameLogic.chipStorage[e.target.id].chipValue );

                delete gameLogic.chipStorage[e.target.id];
                e.target.remove();
            }
        } )
    }
}