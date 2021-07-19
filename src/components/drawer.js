import React from 'react';
import {ArrowRight} from "phosphor-react";

const Drawer = () => {
    return (
        <div className="drawer">
            <h2 className='d-flex justify-between mb-30'>Корзина <img className='cu-p' src="/img/btn-remove.svg" alt="remove"/></h2>

            <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/store/1.jpg)'}} className="cartItemImg">

                    </div>
                    <div className="mr-20">
                        <p className='mb-5'>Nike Air Zoom G.T. Run</p>
                        <b>8 499 c</b>
                    </div>
                    <img className='removeBtn' src="/img/btn-remove.svg" alt="remove"/>
                </div>
                <div className="cartItem d-flex align-center">
                    <div style={{backgroundImage: 'url(/store/1.jpg)'}} className="cartItemImg">

                    </div>
                    <div className="mr-20">
                        <p className='mb-5'>Nike Air Zoom G.T. Run</p>
                        <b>8 499 c</b>
                    </div>
                    <img className='removeBtn' src="/img/btn-remove.svg" alt="remove"/>
                </div>
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
    );
};

export default Drawer;