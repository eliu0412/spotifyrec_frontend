import { useState, useCallback } from "react";


function Music(){
    const [songName, setSongName] = useState('');
    const handleSongChange = (event) => {
        setSongName(event.target.value);
    };

    const [quantity, setQuantity] = useState('');
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleClick = () => {
        alert(songName + ', ' + quantity)
    }



    return(
        <div className="user">
            <h3>Get Music Recommendations</h3>
            <p>Search up a song that you enjoy listening to, and we will generate any amount of songs that match your music taste.</p>
            <input placeholder="Search Music" value={songName} onChange={handleSongChange}></input>
            <br />
            <br />
            <input placeholder="Generation Size" value={quantity} onChange={handleQuantityChange}></input>
            <button type="submit" className='submit' disabled={!quantity || !songName} onClick={handleClick}>Generate</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Or, select one of your own playlists:</h3>

        </div>
        // still need to implement a loop that generates playlist buttons
        //each of these buttons will be a call to the backend that generates a playlist
    )
}

export default Music;