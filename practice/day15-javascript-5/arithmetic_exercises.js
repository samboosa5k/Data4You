const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// 1

console.log( numbers.length );
console.log( numbers[13] );
console.log( numbers[Math.floor( numbers.length / 2 )] );
numbers.forEach( elem => { console.log( elem ) } );
numbers.forEach( elem => { console.log( Math.pow( elem, 2 ) ) } );
numbers.forEach( elem => {
    if ( elem < 0 ) {
        console.log( elem );
    }
} );

//  Peaks
for ( let i = 1; i < numbers.length; i++ ) {
    if ( numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1] ) {
        console.log( numbers[i] );
    }
}

// Search for largest sequence

// Backwards
let newArr = [];

for ( let i = numbers.length - 1; i > 0; i-- ) {
    if ( i == numbers.length - 1 ) {
        newArr.push( numbers[i] );
    } else if ( numbers[i] < newArr[newArr.length - 1] ) {
        newArr.push( numbers[i] );
    }
}

console.log( newArr.reverse() );

// Forwards
let newArr2 = [];

for ( let i = 0; i < numbers.length - 1; i++ ) {
    if ( i === 0 ) {
        newArr2.push( numbers[i] );
    }
    if ( numbers[i] > newArr2[newArr2.length - 1] ) {
        newArr2.push( numbers[i] );
    }
}

console.log( newArr2.reverse() );