import React from 'react'
import AnimalApi from '../AnimalApi'
import './index.scss'

const Card = ({id,image,name}) => {
    const [data,getProducts] = AnimalApi([])
    return (
        <div className='card'>
           {data && data.map((item)=>(
            <ul key={item.id}>
                <li><img src={item.image} alt="" /></li>
                <li>{item.id}</li>
                <li>{item.name}</li>
            </ul>
           ))}
        </div>
    )
}

export default Card
