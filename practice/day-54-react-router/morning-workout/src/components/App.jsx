import React, { useState, useEffect } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width: '300px', alignItems: 'space-between' }
const divStyle = { display: "flex", width: '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px' }

const url = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod';

const App = () => {

  const [fieldValue, setFieldValue] = useState( { email: '', password: '' } );
  const [returnValue, setReturnValue] = useState( { error: '' } );

  const handleTextValueChange = ( e ) => {
    setFieldValue( { ...fieldValue, [e.target.id]: e.target.value } );
  };

  const handleSubmitClick = ( e ) => {
    e.preventDefault();

    const doSubmitFetch = async () => {
      const result = await fetch( url, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      } );

      const data = await result.json();

      setReturnValue( { error: data.error.message } );
    };

    doSubmitFetch();
  }

  useEffect( () => {
    console.log( returnValue );
  }, [returnValue] );

  return (
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={fieldValue.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={fieldValue.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>
      <div>
        {
          returnValue.error // REFERS to the error stored in state
        }
      </div>
    </form>
  );
};

export default App;