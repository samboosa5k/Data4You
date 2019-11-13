import React, { useState, useEffect } from "react";
import UserList from "./UserList.jsx";

const url = "https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/"

const App = ( props ) => {
  const [users, setUsers] = useState();

  useEffect( () => {
    const doFetch = async () => {
      const result = await fetch( url );
      const data = await result.json();

      setUsers( () => {
        return data;
      } )
    };

    doFetch();
  }, [] )
  return <UserList users={users} />;

}

export default App;
