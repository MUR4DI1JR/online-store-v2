import React from 'react';
import {Plus} from "phosphor-react";

const Card = () => {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src="/store/1.jpg" alt=""/>
            <h5>Nike Air Zoom G.T. Run</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена: </span>
                    <b>8 499 c</b>
                </div>
                <button className='button'><Plus size={15}/></button>
            </div>
        </div>
    );
};

export default Card;