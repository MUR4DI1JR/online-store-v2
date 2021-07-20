import React from 'react';
import {HeartStraight, ShoppingCart, UserCircle} from "phosphor-react";
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCard";

const Header = ({onClickCart}) => {
    const {totalPrice} = useCart();


    return (
        <header className="d-flex justify-between align-center p-30">
            <Link to='/'>
                <div className="d-flex align-center">
                    <img width={80} height={80} src='/img/logo.png' alt='logo'/>
                    <div className="headerInfo">
                        <h3 className='text-uppercase'>Muradil Ltd</h3>
                        <p className='opacity-5'>Магазин лучших кроссовок!</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li className='mr-30 d-flex align-center cu-p' onClick={onClickCart}>
                    <ShoppingCart size={24} className='mr-10'/>
                    <span>{totalPrice} c.</span>
                </li>
                <li className='mr-20 cu-p'>
                    <Link to='/likes'>
                        <HeartStraight size={24} />
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                        <UserCircle size={24}/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;