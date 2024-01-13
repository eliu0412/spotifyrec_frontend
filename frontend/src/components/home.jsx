import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import { useState, useCallback } from "react";


function User(){
    const [username, setUsername] = useState('');
    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleClick = () => {
        alert(username)
    }


    // should change the button into a call to the spotify login page, this means we can get info on the playlist
    return (
        <>
        <div className="user">
            <h3>Hello!</h3>
            <h3>Welcome to SpotiRec  <FontAwesomeIcon icon={faHeadphones}/></h3>
            <p>At SpotiRec, we understand the power of music to inspire, uplift, and connect people across the globe. You're in the right place if you're looking for fresh music and undiscovered gems. Our passion is curating a diverse collection of new music from your Spotify history that transcends genres and boundaries, ensuring that every visit to our site is a journey of sonic adventure.</p>
            <br />
            <p>Let's get started by entering your Spotify Username below:</p>
            <input placeholder="Enter Spotify username" value={username} onChange={handleChange}></input>
            <br/>
            <Link to="/music"><button type="submit" className='submit' disabled={!username} onClick={handleClick}>Submit</button></Link>

        </div>
        </>
    )
}

export default User;