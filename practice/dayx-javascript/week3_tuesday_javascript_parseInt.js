const this_year = new Date().getFullYear();
const prompty = prompt( "Birth year plx", 1945 );

console.log( "The current year is: " + parseInt( this_year ) );
console.log( "You are: " + ( this_year - prompty ) + " years old!" );