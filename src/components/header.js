import React from 'react';
import {ShoppingCart, UserCircle} from "phosphor-react";

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-30">
            <div className="d-flex align-center">
                <img width={80} height={80} src='/img/logo.png'/>
                <div className="headerInfo">
                    <h3 className='text-uppercase'>Muradil Ltd</h3>
                    <p className='opacity-5'>Магазин лучших кроссовок!</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className='mr-30 d-flex align-center'>
                    <ShoppingCart size={24} className='mr-10'/>
                    <span>1250 c.</span>
                </li>
                <li>
                    <UserCircle size={24}/>
                </li>
            </ul>
        </header>
    );
};

export default Header;