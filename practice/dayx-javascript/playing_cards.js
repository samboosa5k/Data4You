const ranks = [
    "ACE",
    "KING",
    "QUEEN",
    "JACK",
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2
];

const suits = [
    "SPADES",
    "HEARTS",
    "DIAMONDS",
    "CLOVER"
];

const random_int = ( maxval ) => {
    return Math.floor( Math.random() * Math.floor( maxval ) );
}


const rank_index = random_int( ranks.length );

const suits_index = random_int( suits.length );

window.onload = function () {

    document.write( "Rank: " + ranks[rank_index] + ", " + "Suit: " + suits[suits_index] );
}