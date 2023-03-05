import React, { useState, useEffect } from "react";
import Friend from "./Friend";

const FriendList = () => {
    //get friendlist -> get api
    //display in card form
    const [friendList, updateFriendlist] = useState([]); 

    useEffect(() => { 
        //fetch friendList
        const friendList = [];
        updateFriendlist(friendList);
    }, []);

    return (
        <div>
            {friendList.map((friend) => (
                <Friend
                    name={friend.name}
                    hobbies={friend.hobbies}
                />
            ))}
        </div>
    );
}

export default FriendList;