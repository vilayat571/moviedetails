import React, { useState } from 'react';
import '../../styles/Singlecharacter.css';
import { Link } from 'react-router-dom';

function RandomCharacter() {
    const [data, setData] = useState(null);
    const handleClick = () => {
        fetch(`https://www.breakingbadapi.com/api/character/random`)
            .then(res => res.json())
            .then(veri => setData(veri))
    };
    return (
        <div className='charactercard'>
            <button style={{
                border: "none",
                overflow: "none",
                padding: "6px 20px",
                backgroundColor: "black",
                color: "white",
                fontFamily: "Poppins,sans-serif",
                cursor: "pointer"
            }} onClick={() => handleClick()}>Random Character</button>
            {
                data ? <div className='charactercarddiv'>
                    <img src={data[0].img} alt="" />
                    <div className='main'>
                        <div>Name : {data[0].name}</div>
                        <div>Birthday : {data[0].birthday}</div>
                        <div>Birthday : {data[0].birthday}</div>
                        <div>Status : {data[0].status}</div>
                        <div>Occupation : {data[0].occupation[0]}</div>
                        <div><Link to={'/characters'}>To back</Link></div>
                    </div>
                </div> : <div style={{
                    marginTop: "20px",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "16px"
                }}> Click the button for the random character .</div>
            }
        </div>
    )
};
export default RandomCharacter;