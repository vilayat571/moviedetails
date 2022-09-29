import React, { useEffect, useState } from 'react';
import '../../styles/Singlecharacter.css';
import { Link, useParams } from 'react-router-dom';

function Character() {
  const { id } = useParams();
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then(res => res.json())
      .then(veri => setData(veri))
  }, [data]);
  console.log(data)
  return (
    <div className='charactercard'>
      {
        data ? <div className='charactercarddiv'>
          <img src={data[0].img} alt="" />
          <div className='main'>
            <div>Name : {data[0].name}</div>
            <div>Birthday : {data[0].birthday}</div>
            <div>Status : {data[0].status}</div>
            <div>Occupation : {data[0].occupation[0]}</div>
            <div>    <Link to={'/characters'}>To back</Link></div>
          </div>
        </div> : "Loading..."
      }
    </div>
  )
};
export default Character;