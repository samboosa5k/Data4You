import React from 'react';
import './App.css';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      first: '',
      second: '',
      field: [
        "a", "c", "e", "g",
        "b", "d", "f", "h",
        "a", "c", "e", "g",
        "b", "d", "f", "h",
      ],
      score: 0
    }
    this.handleSquareClick = this.handleSquareClick.bind( this );
  }

  componentDidUpdate() {
    if ( this.state.first !== '' && this.state.second !== '' ) {
      console.log( this.verifySelected() );
      if ( this.verifySelected() ) {
        this.handleScore( this.verifySelected() );
      }
    }
  }

  handleSquareClick( event ) {
    event.preventDefault();
    if ( this.state.first === '' ) {
      this.setState( { first: event.target.innerText } );
    } else if ( this.state.first !== '' && this.state.second === '' ) {
      this.setState( { second: event.target.innerText } );
    }
  }

  verifySelected() {
    if ( this.state.first !== '' && this.state.second !== '' ) {
      if ( this.state.first === this.state.second ) {
        this.setState( { first: '', second: '' } );
        return true;
      }
    }
    this.setState( { first: '', second: '' } );
    return false;
  }

  handleScore( trueOrFalse ) {
    if ( trueOrFalse ) {
      this.setState( { score: this.state.score + 1 } );
    }
  }

  render() {
    let content = this.state.field.map( ( elem, index ) => (
      <span className="square" onClick={this.handleSquareClick} key={index}><p>{elem}</p></span>
    ) )

    return (
      <>
        <h1>{this.state.score}</h1>
        <div className="field">{content}</div>
      </>
    )
  }
}

export default App;