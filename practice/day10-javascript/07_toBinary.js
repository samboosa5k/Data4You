const num_bits = ( int ) => {
    const arr = Array.from(int);
    console.log(  typeof arr )
    const codes = arr.foreach( function ( elem ) {
        return elem.charCodeAt();
    } );
};

console.log( num_bits( 234 ) );