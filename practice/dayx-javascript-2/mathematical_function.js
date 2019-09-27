const square = ( num ) => {
    return Math.pow( num, 2 );
};

console.log( square( 2 ) );


const hypotenuse = ( a, b ) => {
    return Math.sqrt( Math.pow( a, 2 ) + Math.pow( b, 2 ) );
};

console.log( hypotenuse( 6, 4 ) );


const salary = ( pay, hours, days ) => {
    return pay * hours * days;
};

console.log( salary( 11, 7, 5 ) );


const taxed_salary = ( sal, tax ) => {
    return sal * ( tax / 100 );
};

console.log( taxed_salary( salary( 11, 7, 5 ), 20 ) );