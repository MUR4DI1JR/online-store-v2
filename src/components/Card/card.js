import React, {useState} from 'react';
import {Check, Plus} from "phosphor-react";
import styles from './card.module.scss';

const Card = ({id, img, name, price, clickAdd, clickFavorite, favorited = false}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(favorited);

    const clickItem = () =>{
        clickAdd({img, name, price});
        setIsAdded(!isAdded);
    };

    const clickLiked = () =>{
        clickFavorite({id, img, name, price});
        setIsLiked(!isLiked)
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={clickLiked}>
                <img src={isLiked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked"/>
            </div>
            <img width={133} height={112} src={img} alt=""/>
            <h5>{name}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена: </span>
                    <b>{price}</b>
                </div>
                <button className='button' onClick={clickItem}>{isAdded ? <Check size={15} /> : <Plus size={15}/>}</button>
            </div>
        </div>
    );
};

export default Card;