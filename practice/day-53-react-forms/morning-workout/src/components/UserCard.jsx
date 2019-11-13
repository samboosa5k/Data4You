import React from "react";

const UserCard = ( props ) => {
    //  Destructure incoming useState function and isSelected status
    const { setSelectedUser, isSelected } = props;
    const bg = ( isSelected ) ? "red" : "rgba(0,128,255, 0.1)";

    return (
        <div style={{ backgroundColor: bg, }} onClick={() => setSelectedUser( props.index )}> {/* This is where you use the props function for setting the selected user */}
            <p>{props.user.name}</p>
            <p>{props.user.bio}</p>
            <p>{props.user.age}</p>
            <p>{props.user.description}</p>
            <p>{props.user.job}</p>
            <p>{props.index}</p>
        </div>
    );
}

export default UserCard;