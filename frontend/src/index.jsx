import React, { useState } from "react";

export const Review = (props) => {
    const [review, setReview] = useState('');
    // here we might have to have a lot of different things at once

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(review);
    }

    return (
        <div className="auth-form-container">
            <img class="logo" src={require('./img/logo.png')} alt="Frienderlies logo" />
            <h2 class="title">Hi "insert name here" welcome to Frienderlies! What would you like to do today?</h2>
            <button className="link-btn" onclick={() => props.onFormSwitch('findAFriend')}>Find a friend nearby</button>
            <button className="link-btn" onclick={() => props.onFormSwitch('browse')}>Browse friends</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('chat')}>Chat with my friends</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('GO BACK')}>Go back</button>
        </div>
    )
}