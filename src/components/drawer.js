import React from 'react';
import {ArrowLeft, ArrowRight} from "phosphor-react";

const Drawer = ({cartItem, onRemove, onClickCart}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30'>Корзина <img onClick={onClickCart} className='cu-p' src="/img/btn-remove.svg" alt="remove"/></h2>

                {
                    cartItem.length > 0 ?
                        <div>
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
                                <button className='greenButton'>Оформить заказ <ArrowRight size={24} /></button>
                            </div>
                        </div>
                        :
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="120px" height="120px" src="/img/box.png" alt="Empty"/>
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClickCart} className="greenButton">
                                <ArrowLeft size={20} />
                                Вернуться назад
                            </button>
                        </div>
                }
            </div>
        </div>

    );
};

export default Drawer;