/* 
    This can easily be made into a class:
    - The class would contain an increment/decrement score method, to update instance score
    - The class would also have a 'render' method, where the element is created and html added
    - The class would also have a 'mount' method, where the render output is added to the DOM
    - The class would finally have an update interface method, where the score is updated visually
*/


document.addEventListener( 'DOMContentLoaded', () => {


  document.addEventListener( 'click', ( e ) => {
    const min = document.querySelector( '#counter' );
    const max = document.querySelector( '#maximum' );

    if ( e.target.id === 'minus' && min.textContent > 0 ) {
      min.textContent -= 1;
      document.querySelector( '#knob' ).style.width = `${( parseInt( min.textContent ) / parseInt( max.textContent ) ) * 100}%`;
    } else if ( e.target.id === 'plus' && min.textContent < 10 ) {
      min.textContent++;
      document.querySelector( '#knob' ).style.width = `${( parseInt( min.textContent ) / parseInt( max.textContent ) ) * 100}%`;
    }


  } );
} );