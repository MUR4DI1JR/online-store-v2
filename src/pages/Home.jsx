import React from 'react';
import {MagnifyingGlass} from "phosphor-react";
import Card from "../components/Card/card";

const Home = ({store, searchValue, onChangeInput, onLiked, onClickAdd,}) => {
    return (
        <div className="content p-40">
            <div className='d-flex align-center mb-30 justify-between'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex align-center">
                    <MagnifyingGlass size={24}/>
                    <input
                        type="text"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={onChangeInput}
                    />
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    store.filter(item => item.name.toLowerCase().includes(searchValue)).map((card, i) => {
                        return (
                            <Card
                                key={i}
                                clickAdd={(item) => onClickAdd(item)}
                                clickFavorite={() => onLiked(card)}
                                {...card}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;