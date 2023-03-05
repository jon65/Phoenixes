import React, { useState, useEffect } from "react";
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const profileReducer = (state, action) => { 
    if (action.type ===  "addFriend") {
        //call api to add friend
        //remove person profile from stack
        //filter out person from stack
        
    }
    if (action.type === "nextPerson") {
        //remove person from stack
        //filter out person from stack
        return {
            ...state.value,
            
            
        }

    }
}

const Dashboard = () => {

    const [refreshPage, setRefreshPage] = useState(false);
    //use reducers;
    const [profiles, setProfiles] = useState([]);

    //GET list of profiles
    useEffect(() => {
        //get profiles
        const profiles = [{
            id: 'userId1',
            location: 'chadton',
            name: 'Dad',
            hobbies: ['swimming'],
        },
            {
                id: 'user2',
                name: 'yourmom',
                location: 'South Yara',
                hobbies: ['running'],
            },
        ]
        

    }, [refreshPage]);

    const addProfilesStack = (profiles) => { 
        setProfiles(profiles);
    }

    const addFriend = (friend) => { 

    }

    const passFriend = (friend) => { 

    }

    return (
        <div className="App">
            <Link className="link-btn" to="/friendList"><div>
            </div>
                Your Friends
            </Link>
            <div>
                show new people based on location
                <Profile />
            </div>
        </div>
        
    );
}

export default Dashboard;