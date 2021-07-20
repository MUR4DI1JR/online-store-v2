import React, {useState, useContext} from 'react';
import {ArrowRight} from "phosphor-react";
import Info from "./info";
import AppContext from "../context";
import axios from 'axios';

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const Drawer = ({cartItem, onRemove, onClickCart}) => {
    const {cartItems, setCartItems} = useContext(AppContext);
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () =>{
        try{
            setIsLoading(true);
            const {data} = await axios.post(`https://60f54d102208920017f39ff9.mockapi.io/order`, {orders : cartItems});
            setOrderId(data.id);
            setIsOrderComplete(true);
            for (let i = 0; i < cartItems.length; i++){
                const item = cartItems[i];
                await axios.delete('https://60f54d102208920017f39ff9.mockapi.io/cart/' + item.id);
                await delay(1000)
            }
            setCartItems([]);
        }catch (e) {
            alert('Error 404!')
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30'>Корзина <img onClick={onClickCart} className='cu-p' src="/img/btn-remove.svg" alt="remove"/></h2>

                {
                    cartItem.length > 0 ?
                        <div className='d-flex flex-column flex'>
                            <div className="items">
                                {
                                    cartItem.map((item, i) =>{
                                        return(
                                            <div key={i} className="cartItem d-flex align-center mb-20">
                                                <div style={{backgroundImage: `url(${item.img}`}} className="cartItemImg">

                                                </div>
                                                <div className="mr-20">
                                                    <p className='mb-5'>{item.name}</p>
                                                    <b>{item.price}</b>
                                                </div>
                                                <img onClick={() => onRemove(item.id)} className='removeBtn' src="/img/btn-remove.svg" alt="remove"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 456 с</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1025 с</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ <ArrowRight size={24} /></button>
                            </div>
                        </div>
                        :
                        <Info
                            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                            desc={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` :'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                            img={isOrderComplete ? 'img/task.png' : '/img/box.png'}
                        />
                }
            </div>
        </div>

    );
};

export default Drawer;