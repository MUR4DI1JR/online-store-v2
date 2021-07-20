import React, {useContext} from 'react';
import {ArrowLeft} from "phosphor-react";
import AppContext from "../context";

const Info = ({img, title, desc}) => {
    const {setCartOpen} = useContext(AppContext);
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px"  src={img} alt="Empty"/>
            <h2>{title}</h2>
            <p className="opacity-6">{desc}</p>
            <button onClick={() => setCartOpen(false)} className="greenButton">
                <ArrowLeft size={20} />
                Вернуться назад
            </button>
        </div>
    );
};

export default Info;