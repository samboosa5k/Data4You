class Chip {
    constructor( chipId, chipSize, chipColor, chipValue, chipPosition ) {
        this.chipId = chipId;
        this.chipSize = chipSize;
        this.chipValue = chipValue;
        this.chipColorR = chipColor[0];
        this.chipColorG = chipColor[1];
        this.chipColorB = chipColor[2];
        this.positionW = chipPosition[0]
        this.positionH = chipPosition[1];
    }

    render() {
        //  Create DOM elements
        const chipDiv = document.createElement( 'div' );
        const chipP = document.createElement( 'p' );

        //  Give chip an ID
        chipP.textContent = `${this.chipId}`;

        chipDiv.className = 'chip';
        chipDiv.id = `${this.chipId}`;
        chipDiv.style.cssText =
            `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 5rem;
            height: 5rem;
            position: absolute; 
            top:
            ${this.positionH}px;
            left:
            ${this.positionW}px;
            border-radius: 2.5rem;
            background-color: rgb(
                ${this.chipColorR},
                ${this.chipColorG},
                ${this.chipColorB});
            `;
        chipDiv.appendChild( chipP );
        return chipDiv;
    }

    mount() {
        const stage = document.querySelector( '#stage-container' );
        stage.appendChild( this.render() );

    }

    removeSequence( thisTarget ) {
        thisTarget.style.backgroundColor = 'rgba(0,0,0,0';
        thisTarget.style.transform = 'translateY(-128px)';
        thisTarget.style.transitionDuration = '0.15s';

        setInterval( () => {
            delete thisTarget.id;
            thisTarget.remove();
        }, 150 )
    }
}

const chipStorage = [];

const gameSetup = {

    theBody: document.getElementsByTagName( 'body' ),

    initialize( number, minValue, maxValue ) {
        //  Get interface
        const scoreArea = document.querySelector( '#score-area' ).clientHeight;

        for ( let i = 0; i < number; i++ ) {

            //  render random placement
            const randH = Math.min( window.innerHeight - scoreArea, Math.round( ( Math.random() * window.innerHeight ) + scoreArea ) );
            const randW = Math.min( window.innerWidth - 96, Math.round( ( Math.random() * window.innerWidth ) ) );

            //  render random colors
            const randR = Math.round( Math.random() * 255 );
            const randG = Math.round( Math.random() * 255 );
            const randB = Math.round( Math.random() * 255 );

            chipStorage.push( new Chip(
                i, 1, [randR, randG, randB],
                Math.round( Math.random( minValue ) * maxValue ),
                [randW, randH] ) );
        }
    },

    setStage() {
        for ( let i = 0; i < chipStorage.length; i++ ) {
            chipStorage[i].mount();
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

                /* e.target.classList.add( 'chip--remove' ); */

                chipStorage[e.target.id].removeSequence( e.target );

            }
        } )
    }
}