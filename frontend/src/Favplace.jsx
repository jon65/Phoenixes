import React, { useState } from 'react';

const cities = [
    'Adelaide', 
    'Albany', 
    'Albury', 
    'Alice Springs', 
    'Armidale', 
    'Bairnsdale', 
    'Ballarat', 
    'Bathurst', 
    'Bendigo', 
    'Brisbane', 
    'Broken Hill', 
    'Broome', 
    'Bunbury', 
    'Bundaberg', 
    'Burnie', 
    'Busselton', 
    'Cairns', 
    'Canberra', 
    'Carnarvon',
    'Ceduna', 
    'Cessnock', 
    'Charleville', 
    'Charters Towers', 
    'Clarence Valley', 
    'Clermont', 
    'Cloncurry', 
    'Cobar', 
    'Coffs Harbour', 
    'Collie', 
    'Cooktown', 
    'Cooma', 
    'Coonabarabran', 
    'Coonamble', 
    'Cowra', 
    'Dalby', 
    'Darwin', 
    'Deniliquin', 
    'Devonport', 
    'Dubbo', 
    'Esperance', 
    'Exmouth', 
    'Forbes', 
    'Forster', 
    'Gawler', 
    'Geelong', 
    'Geraldton', 
    'Gladstone', 
    'Gold Coast', 
    'Goondiwindi', 
    'Goulburn', 
    'Grafton', 
    'Griffith', 
    'Gympie', 
    'Hamilton', 
    'Hervey Bay', 
    'Hobart', 
    'Horsham', 
    'Hughenden', 
    'Ingham', 
    'Innisfail', 
    'Jabiru', 
    'Kalbarri', 
    'Karratha', 
    'Katherine', 
    'Kempsey', 
    'Kingaroy', 
    'Kingscote', 
    'Kingston SE', 
    'Kowanyama', 
    'Kununurra', 
    'Kyabram', 
    'Lake Grace', 
    'Latrobe Valley', 
    'Launceston', 
    'Lismore', 
    'Lithgow', 
    'Longreach', 
    'Mackay', 
    'Maitland', 
    'Mandurah', 
    'Manjimup', 
    'Mareeba',
    'Margaret River', 
    'Maryborough', 
    'Melbourne', 
    'Merimbula', 
    'Mildura', 
    'Mission Beach', 
    'Moranbah', 
    'Moree', 
    'Morwell', 
    'Mount Barker', 
    'Mount Gambier',
    'Mount Isa', 
    'Mount Magnet', 
    'Murray Bridge', 
    'Muswellbrook', 
    'Nambour', 
    'Naracoorte', 
    'Narrabri', 
    'Newcastle', 
    'Newman', 
    'Nhulunbuy', 
    'Norseman', 
    'Nowra', 
    'Nuriootpa', 
    'Oakey', 
    'Oberon', 
    'Onslow', 
    'Orange', 
    'Pakenham', 
    'Parkes', 
    'Penola'.

];

function FavoritePlaceForm() {
  const [selectedCity, setSelectedCity] = useState('');

  function handleCityChange(event) {
    setSelectedCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //todo implement api
    alert(`Your favorite place is ${selectedCity}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 class="title">Your favourite place</h2>
      <label htmlFor="city-select">Select your favorite place:</label>
      <select id="city-select" value={selectedCity} onChange={handleCityChange}>
        <option value="">Please select</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button type="submit">Continue</button>
    </form>
  );
}