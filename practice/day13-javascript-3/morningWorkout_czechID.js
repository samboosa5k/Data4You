let id = 5552290000;

const resolver = ( id ) => {

    let result = true;

    /* Check valid number */
    if ( Number.isNaN( parseInt( id ) ) ) result = false;

    /* Check number length */
    if ( ( id.toString().length ) !== 10 ) result = false;

    /* Split number into pairs */
    let arr = id.toString().split( "" ).map( ( elem, ind, thearray ) => {
        return ( ind % 2 === 1 && ind < thearray.length - 1 ) ? elem + "," : elem;
    } ).join( "" ).split( "," );

    /* Logic */
    arr.forEach( ( num, index, array ) => {


        if ( index === 1 && ( num > 12 && ( num - 50 ) > 12 ) ) {
            result = false;
            return;
        }

        if ( index === 2 ) {
            if ( num > 31 ) {
                result = false;
            } else if ( array[1] % 2 === 0 && num > 30 ) {
                result = false;
            } else if ( ( array[1] === '02' && num > 28 ) || ( array[1] === '52' && num > 28 ) ) {
                result = false;
            }
        }


    } );

    return result;
}


console.log( resolver( id ) );
console.log( 2 % 2 )
