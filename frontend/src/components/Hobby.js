import React from "react";
import '../App.css';

function HobbyForm() {

  const hobbyForm = document.getElementById('hobby-form');
  const selectedHobbiesDiv = document.getElementById('selected-hobbies');
  hobbyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedHobbies = Array.from(hobbyForm.querySelectorAll('option:checked'))
      .map((option) => option.label);
    selectedHobbiesDiv.textContent = `Selected hobbies: ${selectedHobbies.join(', ')}`;
  });

  return (
    <div className="form-page">
      <img class="logo" src={require('../img/logo.png')} alt="Frienderlies logo" />
      <h2 class="title">What are your hobbies?</h2>
      <h4 class="description">We'll connect you to like-minded people</h4>
      <form id="hobby-form">
        <label class="subtitle" htmlFor="hobby">Selected Hobbies</label>
        <br></br>
        <div id="selected-hobbies"></div>
        <select id="hobbies-dropdown" name="hobby" multiple>
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
        <br></br>
        <button type="submit">Add hobbies</button>
      </form>
      <br></br>
    </div>
  );
}

export default HobbyForm;