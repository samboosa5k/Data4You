var rom = ['M', 'CM','D', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var denom = [1000, 900 ,500, 100, 50, 40, 10, 9, 5, 4, 1];

let value = 83;

let array = [];

let roman = [];

let ind = 0;

const subtractor = ( val ) => {
    if ( value >= denom[ind] ) {
        array.push( denom[ind] );
        roman.push( rom[ind] );
        value -= denom[ind];
        subtractor( value );
    } else if ( value < denom[ind] ) {
        subtractor( value, ind += 1 )
    } else if ( value === 0 ) {
        return roman;
    }
};

console.log(subtractor( 83 ));