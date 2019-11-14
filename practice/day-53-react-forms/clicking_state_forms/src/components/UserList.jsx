import React, { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";

const UserList = ( props ) => {
    const [selectedUser, setSelectedUser] = useState();
    let content = 'Loading...';

    //  For loading the data
    if ( props.users === undefined ) {
        content = 'Loading...';
    } else {
        content = props.users.map( ( elem, index ) => {
            return <UserCard user={elem}
                index={index}
                setSelectedUser={setSelectedUser}
                isSelected={selectedUser === index}
            />;
        } )
    }

    return content;
}

export default UserList;