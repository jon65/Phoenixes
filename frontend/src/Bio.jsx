import React, { useState } from "react";

export const Bio = (props) => {
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bio);
    }

    return (
        <div className="auth-form-container">
            <img class="logo" src={require('./img/logo.png')} alt="Frienderlies logo" />
            <h2 class="title">Knowing you better</h2>
            <form className="bio-form" onSubmit={handleSubmit}>
                <label htmlFor="pfp" className="subtitle">Profile picture</label>
                <button type="submit" class="login">Add profile picture</button>
                <input value={bio} name="bio" onChange={(e) => setName(e.target.value)} id="bio" placeholder="enter details about yourself here!" />
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}   