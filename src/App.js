import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "./components/header";
import Drawer from "./components/drawer";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import LikeItem from "./pages/likeItem";

function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [likeItem, setLikeItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [store, setStore] = useState([]);

    useEffect(()=>{
        axios.get('https://60f54d102208920017f39ff9.mockapi.io/items').then((res) =>{
            setStore(res.data)
        });
        axios.get('https://60f54d102208920017f39ff9.mockapi.io/cart').then((res) =>{
            setCartItems(res.data)
        });
        axios.get('https://60f54d102208920017f39ff9.mockapi.io/likeItems').then((res) =>{
            setLikeItem(res.data)
        })
    }, []);

    const onClickAdd = (item) =>{
        axios.post('https://60f54d102208920017f39ff9.mockapi.io/cart', item);
        setCartItems(prev => [...prev, item])
    };

    const onLiked = async (obj) =>{
        try{
            if (likeItem.find(favItem => favItem.id === obj.id)){
                axios.delete(`https://60f54d102208920017f39ff9.mockapi.io/likeItems/${obj.id}`);
            }else {
                const {data} = await axios.post('https://60f54d102208920017f39ff9.mockapi.io/likeItems', obj);
                setLikeItem(prev => [...prev, data])
            }
        }catch (e) {
            alert('Error 404!')
        }

    };

    const removeItem = (id) =>{
        axios.delete(`https://60f54d102208920017f39ff9.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    const onChangeInput = (e) =>{
        setSearchValue(e.target.value)
    };


    return (
        <div className="wrapper clear">
            {
                cartOpen && <Drawer cartItem={cartItems} onClickCart={() => setCartOpen(false)} onRemove={removeItem}/>
            }
            <Header onClickCart={()=> setCartOpen(!cartOpen)}/>
            <Route path='/' exact>
                <Home
                    store={store}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeInput={onChangeInput}
                    onLiked={onLiked}
                    onClickAdd={onClickAdd}
                />
            </Route>
            <Route path='/likes'>
                <LikeItem items={likeItem} onLiked={onLiked}/>
            </Route>
        </div>
  );
}

export default App;
