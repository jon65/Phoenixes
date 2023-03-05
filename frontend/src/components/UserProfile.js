import React, { useState, useEffect } from "react";
import Button from './UI/Button';
import classes from './UserProfile.module.css';

const UserProfile = () => {
    const [favPlace, setFavPlace] = useState([]);
    const [favHobbies, setFavHobbies] = useState([]);
    const [selectedHobbies, addHobbies] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [loading, setLoading] = useState(false);
    //called when page renders

    useEffect(() => {
        // fetch('http://localhost:5000/cities')
        //     .then(response => response.json())
        //     .then(data => {
        //         setFavPlace(data);
        //         setLoading(false);
        //     });
        setFavHobbies([
            'swimming',
            'running',
        ]);

        setFavPlace(
            [
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
                'Penola'
            ]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        //submit the form data to the server 
    }

    const handleSetFavPlace = event => {
        setSelectedPlace(event.target.value);
    }

    const handleAddFavHobbies = event => {
        const hobby = event.target.value;
        if (!selectedHobbies.includes(hobby)) {
            setSelectedPlace([...selectedHobbies, hobby])
        }
    }

    return (
        <div className="App">
            <div>
                <h2>What are your favourite places?</h2>
                {loading ? (
                    <div className="loading-overlay">
                        <div className="loading-spinner">LOADING</div>

                    </div>
                ) : (

                    <form onSubmit={handleSubmit}>
                        <label>City:</label>
                        <select className="city-select" value={selectedPlace} onChange={handleSetFavPlace}>
                            {favPlace.map(favPlace => <option key={favPlace} value={favPlace}>{favPlace}</option>)}
                        </select>
                        <div>
                            <h2>What are your favourite hobbies?</h2>
                            <div>
                                {favHobbies}
                            </div>
                            <label>Hobbies:</label>
                            <select className="city-select" value={favHobbies[0]} onChange={handleAddFavHobbies}>
                                {favHobbies.map(hobby => <option key={hobby} value={hobby}>{hobby}</option>)}
                            </select>
                        </div>
                        <Button type="submit">
                            Continue
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default UserProfile;