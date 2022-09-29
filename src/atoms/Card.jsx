import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Card.css'
function Card({ item }) {
    console.log(item)
    return (
        <div className='card'>
            {item.img ? <img src={item.img} alt="" /> : ''}
            {item.name ? <div>{item.name}</div> : ''}
            {item.cause ? <div>Cause : {item.cause}</div> : ''}
            {item.death ? <div>{item.death}</div> : ''}
            {item.last_words ? <div>{item.last_words}</div> : ''}
            {item.season ? <div>{item.season}</div> : ''}
            {item.responsible ? <div>{item.responsible}</div> : ''}
        </div>
    )
}

export default Card
