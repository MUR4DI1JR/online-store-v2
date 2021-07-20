import React from 'react';
import {MagnifyingGlass} from "phosphor-react";
import Card from "../components/Card/card";

const Home = ({store, searchValue, onChangeInput, onLiked, onClickAdd, cartItems, isLoading}) => {

    const renderItem = () => {
        const filteredItems = store.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(10)] : filteredItems).map((card, i) => {
            return (
                <Card
                    key={i}
                    clickAdd={(obj) => onClickAdd(obj)}
                    clickFavorite={(obj) => onLiked(obj)}
                    loading={isLoading}
                    {...card}
                />
            )
        })
    };

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
                    renderItem()
                }
            </div>
        </div>
    );
};

export default Home;