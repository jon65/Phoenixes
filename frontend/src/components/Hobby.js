import React, { useState } from "react";
import '../App.css';

function HobbyForm() {
    const [selectedHobbies, setSelectedHobbies] = useState([]);
  
    function handleCheckboxChange(event) {
      const hobby = event.target.value;
      if (event.target.checked) {
        setSelectedHobbies([...selectedHobbies, hobby]);
      } else {
        setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      alert(`Selected hobbies: ${selectedHobbies.join(', ')}`);
    }

    return (
        <div className="form-page">
            <img class="logo" src={require('../img/logo.png')} alt="Frienderlies logo" />
            <h3 class="subtitle">What are your hobbies?</h3>
            <h4 class="subtitle">We'll connect you to like-minded people</h4>
            <form onSubmit={handleSubmit}>
                <label class="subtitle" htmlFor="hobby">Hobby</label><br></br>
                <div class="checkbox-options">
                    <input type="checkbox" id="checkers" name="hobby" value="checkers" />
                    <label for="checkers">Checkers</label><br></br>

                    <input type="checkbox" id="chess" name="hobby" value="chess" />
                    <label for="chess">Chess</label><br></br>

                    <input type="checkbox" id="choir" name="hobby" value="choir" />
                    <label for="choir">Choir</label><br></br>

                    <input type="checkbox" id="cooking" name="hobby" value="cooking" />
                    <label for="cooking">Cooking</label><br></br>

                    <input type="checkbox" id="crocheting" name="hobby" value="crocheting" />
                    <label for="crocheting">Crocheting</label><br></br>

                    <input type="checkbox" id="cycling" name="hobby" value="cycling" />
                    <label for="cycling">Cycling</label><br></br>

                    <input type="checkbox" id="drums" name="hobby" value="drums" />
                    <label for="drums">Drums</label><br></br>

                    <input type="checkbox" id="gardening" name="hobby" value="gardening" />
                    <label for="gardening">Gardening</label><br></br>

                    <input type="checkbox" id="golf" name="hobby" value="golf" />
                    <label for="golf">Golf</label><br></br>

                    <input type="checkbox" id="guitar" name="hobby" value="guitar" />
                    <label for="guitar">Guitar</label><br></br>

                    <input type="checkbox" id="harmonica" name="hobby" value="harmonica" />
                    <label for="harmonica">Harmonica</label><br></br>

                    <input type="checkbox" id="hiking" name="hobby" value="hiking" />
                    <label for="hiking">Hiking</label><br></br>

                    <input type="checkbox" id="knitting" name="hobby" value="knitting" />
                    <label for="knitting">Knitting</label><br></br>

                    <input type="checkbox" id="photography" name="hobby" value="photography" />
                    <label for="photography">Photography</label><br></br>

                    <input type="checkbox" id="piano" name="hobby" value="piano" />
                    <label for="piano">Piano</label><br></br>

                    <input type="checkbox" id="puzzles" name="hobby" value="puzzles" />
                    <label for="puzzles">Puzzles</label><br></br>

                    <input type="checkbox" id="reading" name="hobby" value="reading" />
                    <label for="reading">Reading</label><br></br>

                    <input type="checkbox" id="squash" name="hobby" value="squash" />
                    <label for="squash">Squash</label><br></br>
                    <input type="checkbox" id="swimming" name="hobby" value="swimming" />
                    <label for="swimming">Swimming</label><br></br>
                    <input type="checkbox" id="tennis" name="hobby" value="tennis" />
                    <label for="tennis">Tennis</label><br></br>

                    <input type="checkbox" id="travelling" name="hobby" value="travelling" />
                    <label for="travelling">Travelling</label><br></br>

                    <input type="checkbox" id="ukulele" name="hobby" value="ukulele" />
                    <label for="ukulele">Ukulele</label><br></br>

                    <input type="checkbox" id="walking" name="hobby" value="walking" />
                    <label for="walking">Walking</label><br></br>

                    <input type="checkbox" id="woodworking" name="hobby" value="woodworking" />
                    <label for="woodworking">Woodworking</label><br></br>

                    <input type="checkbox" id="yoga" name="hobby" value="yoga" />
                    <label for="yoga">Yoga</label><br></br>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default HobbyForm;
