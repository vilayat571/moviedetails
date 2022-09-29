import React, { useState } from 'react';
import '../../styles/Singlecharacter.css';
import { Link } from 'react-router-dom';

function RandomDeath() {
    const [data, setData] = useState(null);
    const handleClick = () => {
        fetch(`https://www.breakingbadapi.com/api/random-death`)
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
                fontFamily:"Poppins,sans-serif",
                cursor:"pointer"
            }} onClick={() => handleClick()}>Random Character</button>
          {
                data ? <div className='charactercarddiv'>
                    <img src={data.img} alt="" />
                    <div className='main'>
                        <div>Death : {data.death}</div>
                        <div>Nickname : {data.nickname}</div>
                        <div>Cause : {data.cause}</div>
                        <div>Occupation : {data.occupation[0]}</div>
                        <div><Link to={'/deaths'}>To back</Link></div>
                    </div>
                </div> : <div style={{
                    marginTop: "20px",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "16px"
                }}> Click the button for the random death .</div>
            } 
        </div>
    )
};
export default RandomDeath;