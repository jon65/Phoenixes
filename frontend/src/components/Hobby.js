import React, { useState } from "react";
import '../App.css';

const Hobby = () => {

    return (
        <div className="form-page">
            <img class="logo" src={require('../img/logo.png')} alt="Frienderlies logo" />
            <h3 class="subtitle">What are your hobbies?</h3>
            <h4 class="subtitle">We'll connect you to like-minded people</h4>
            <form className="hobby-form">
                <label class="subtitle" htmlFor="hobby">Hobby</label>
                <select name="hobby" id="hobby" type="hobby" placeholder="Choose a hobby" class="input">

                    <option value="checkers">Checkers</option>
                    <option value="chess">Chess</option>
                    <option value="choir">Choir</option>
                    <option value="cooking">Cooking</option>
                    <option value="crocheting">Crocheting</option>
                    <option value="cycling">Cycling</option>
                    <option value="drums">Drums</option>
                    <option value="gardening">Gardening</option>
                    <option value="golf">Golf</option>
                    <option value="guitar">Guitar</option>
                    <option value="harmonica">Harmonica</option>
                    <option value="hiking">Hiking</option>
                    <option value="knitting">Knitting</option>
                    <option value="photography">Photography</option>
                    <option value="piano">Piano</option>
                    <option value="puzzles">Puzzles</option>
                    <option value="reading">Reading</option>
                    <option value="squash">Squash</option>
                    <option value="swimming">Swimming</option>
                    <option value="tennis">Tennis</option>
                    <option value="travelling">Travelling</option>
                    <option value="ukulele">Ukulele</option>
                    <option value="walking">Walking</option>
                    <option value="woodworking">Woodworking</option>
                    <option value="yoga">Yoga</option>
                </select>
            </form>
            <button type="submit" class="hobby">Skip for now</button>

            <button type="submit" class="hobby">Continue</button>

            <button type="submit" class="hobby">Go back</button>
        </div>
    );
}

export default Hobby;
