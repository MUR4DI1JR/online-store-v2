import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "./components/header";
import Drawer from "./components/drawer";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import LikeItem from "./pages/likeItem";
import AppContext from "./context";

function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [likeItem, setLikeItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [store, setStore] = useState([]);

    useEffect( ()=>{
        async function fetchData() {
            const cartRes = await axios.get('https://60f54d102208920017f39ff9.mockapi.io/cart');
            const likeRes = await axios.get('https://60f54d102208920017f39ff9.mockapi.io/likeItems');
            const itemsRes = await axios.get('https://60f54d102208920017f39ff9.mockapi.io/items');

            setIsLoading(false);

            setCartItems(cartRes.data);
            setLikeItem(likeRes.data);
            setStore(itemsRes.data);
        }

        fetchData();

    }, []);

    const onClickAdd = (obj) => {
        if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://60f54d102208920017f39ff9.mockapi.io/cart/${obj.id}`);
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        } else {
            axios.post('https://60f54d102208920017f39ff9.mockapi.io/cart', obj);
            setCartItems(prev => [...prev, obj])
        }
    };

    const onLiked = async (obj) =>{
        try{
            if (likeItem.find(favItem => favItem.id === obj.id)){
                axios.delete(`https://60f54d102208920017f39ff9.mockapi.io/likeItems/${obj.id}`);
                setLikeItem(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
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

    const isItemAdded = (id) =>{
        return cartItems.some((obj) => Number(obj.id) === Number(id))
    };

    return (
        <AppContext.Provider value={{store, cartItems, likeItem, isItemAdded, setCartOpen, setCartItems}}>
            <div className="wrapper clear">
                {
                    cartOpen && <Drawer cartItem={cartItems} onClickCart={() => setCartOpen(false)} onRemove={removeItem}/>
                }
                <Header onClickCart={()=> setCartOpen(!cartOpen)}/>
                <Route path='/' exact>
                    <Home
                        store={store}
                        cartItems={cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeInput={onChangeInput}
                        onLiked={onLiked}
                        onClickAdd={onClickAdd}
                        isLoading={isLoading}
                    />
                </Route>
                <Route path='/likes'>
                    <LikeItem  onLiked={onLiked}/>
                </Route>
            </div>
        </AppContext.Provider>
  );
}

export default App;
