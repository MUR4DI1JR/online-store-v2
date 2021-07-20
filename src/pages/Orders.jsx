import React, {useState, useEffect, useContext} from 'react';
import Card from "../components/Card/card";
import axios from "axios";
import AppContext from "../context";


const Order = () => {
    const {onClickAdd, onLiked} = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        (async () =>{
            try {
                const {data} = await axios.get('https://60f54d102208920017f39ff9.mockapi.io/order');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.orders], []))
                setIsLoading(false)
            }catch (e) {
                alert('Error 404!')
            }

        })()
    }, []);

    return (
        <div className="content p-40">
            <div className='d-flex align-center mb-30 justify-between'>
                <h1>Мои заказы</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    (isLoading ? [...Array(10)] : orders).map((card, i) => {
                        return (
                            <Card
                                key={i}
                                loading={isLoading}
                                {...card}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Order;