import React from 'react';
import './Item.scss'
const Item = (props) => {
    return (
        <div className="item">
            <img src={props.img} alt="slot-item"/>
        </div>
    )
}

export default Item;