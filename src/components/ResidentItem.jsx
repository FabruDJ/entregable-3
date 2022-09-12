import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentItem = ({ url }) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [])

    return (
        <div>
            <li>
                <img src={character.image} alt="character-img" />
                <p className='char-name'>{character.name}</p>
                <p><b>Status: </b> {character.status}</p>
                <p><b>Origin: </b>{character.origin?.name}</p>
                <p><b>Episodes Where Appear: </b>{character.origin?.lenght}</p>

            </li>
        </div>
    );
};

export default ResidentItem;