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
            <h2 class="title">Review</h2>
            <form className="review-form" onSubmit={handleSubmit}>
                <button type="submit" class="login">Edit picture</button>
                <button type="submit" class="login">Edit name</button>
                <label htmlFor="editBio" className="subtitle">A little bit about me</label>
                <button type="submit" class="login">Edit bio</button>
                <label htmlFor="editLocations" className="subtitle">My favourite places:</label>
                <button type="submit" class="login">Edit locations</button>
                <label htmlFor="editHobbies" class="login">My hobbies:</label>
                <button type="submit" class="login">Edit hobbies</button>
                {/* this button should probably be bigger than the others, like in the wireframe */}
                <button type="submit" class="login">Create account</button> 
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('GO BACK')}>Go back</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}   