import React, { useState, useEffect } from "react";


const Profile = (props) => {

    return (
        <div>
            {props.username}
            { props.hobbies}
        </div>
    );
}

export default Profile;
