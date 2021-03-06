import React, {useState, useContext} from 'react';
import {Check, Plus} from "phosphor-react";
import ContentLoader from "react-content-loader";
import styles from './card.module.scss';
import AppContext from "../../context";

const Card = ({id, img,  name, price, clickAdd, clickFavorite, favorited = false, cartAdded = false, loading = false}) => {
    const {isItemAdded} = useContext(AppContext);
    const [isLiked, setIsLiked] = useState(favorited);
    const card = {id, parentId: id, img, name, price};

    const clickItem = () =>{
        clickAdd(card);
    };

    const clickLiked = () =>{
        clickFavorite(card);
        setIsLiked(!isLiked)
    };

    return (
        <div className={styles.card}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={155}
                        height={250}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="1" y="0" rx="10" ry="10" width="155" height="155"/>
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
                        <rect x="1" y="234" rx="5" ry="5" width="80" height="25"/>
                        <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader>
                    :
                    <>
                        {
                            clickFavorite
                            &&
                            <div className={styles.favorite} onClick={clickLiked}>
                                <img src={isLiked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked"/>
                            </div>
                        }
                        <img width='100%' height={170} src={img} alt=""/>
                        <h5>{name}</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>????????: </span>
                                <b>{price} c</b>
                            </div>
                            {
                                clickAdd && <button className={isItemAdded(id) ? styles.buttonActive : 'button'} onClick={clickItem}>{isItemAdded(id) ? <Check size={20}/> : <Plus size={15}/>}</button>
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default Card;