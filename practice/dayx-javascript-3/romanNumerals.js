/*
1000 =          M
100 100 =       CC
10 10 10 =      XXX
4 =             IV
*/

/*
- bring number into function
- subtract highest denom from number
- insert roman numeral into array
- go down one denom and repeat steps
*/

/* 
var rom = ['M', 'CM', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var denom = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let value = 883;

let ind = 0;

let array = [];
let roman = [];

const subtractor = ( val ) => {
    if ( value >= denom[ind] ) {
        array.push( denom[ind] );
        roman.push( rom[ind] );
        value -= denom[ind];
        subtractor( value, ind );
    } else if ( value < denom[ind] ) {
        subtractor( value, ind++ )
    }
};

subtractor( value, 0 );
console.log( array );
console.log( roman.join( "" ) );

 */

// Refactored for freecodecamp

let ind = 0;

let array = [];
let roman = [];

const convertToRoman = ( value ) => {
    const rom = ['M', 'CM', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const denom = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if ( value >= denom[ind] ) {
        array.push( denom[ind] );
        roman.push( rom[ind] );
        value -= denom[ind];
        convertToRoman( value, ind );
    } else if ( value < denom[ind] ) {
        convertToRoman( value, ind++ )
    }

    let num = roman.join( "" ).toUpperCase();
    return num;
};

console.log( typeof convertToRoman( 10 ) );

console.log( roman.join( "" ).toString() );