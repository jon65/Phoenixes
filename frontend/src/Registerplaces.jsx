import React, { useState } from "react";
import styled from "styled-components"

const theme={
    white:{
        default:"#ffffff",
        hover:"#f5f5f5"
    }
}

export const Register = (props) => {
    const [favPlace, setFavPlace] = useState('');
    // const [Hobbies,setHobbies ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        //submit the form data to the server 
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
            What are your favourite places?
            We'll recommend friends based on this nothing more 
            <input type="text" value={Add location} onChange={(e) => setFavPlace(e.target.value)}type="Favourite places" placeholder="enter your favourite places" />
        </label>

        <br />
        
      <button onCLick={clickMe}>
        Button=<styled className="button"
            background-color:white
            colour:black
            font-size:20px
            padding

            >
            
        </styled>
      </button>
      <button type="submit" class="login">Log In</button>
    </form>
  );
}
        
