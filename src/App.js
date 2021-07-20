import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "./components/header";
import Drawer from "./components/Drawer/drawer";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import LikeItem from "./pages/likeItem";
import AppContext from "./context";
import Order from "./pages/Orders";

function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [likeItem, setLikeItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [store, setStore] = useState([]);

    useEffect( ()=>{
        async function fetchData() {
            try{
                const [cartRes, likeRes, itemsRes] = await Promise.all([
                    axios.get('https://60f54d102208920017f39ff9.mockapi.io/cart'),
                    axios.get('https://60f54d102208920017f39ff9.mockapi.io/likeItems'),
                    axios.get('https://60f54d102208920017f39ff9.mockapi.io/items')
                ]);

                setIsLoading(false);

                setCartItems(cartRes.data);
                setLikeItem(likeRes.data);
                setStore(itemsRes.data);
            }catch (e) {
                alert('Error 404!')
            }
        }

        fetchData();

    }, []);

    const onClickAdd = async (obj) => {
        try{
            const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
            if (findItem) {
                setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://60f54d102208920017f39ff9.mockapi.io/cart/${findItem.id}`);
            } else {
                setCartItems(prev => [...prev, obj]);
                const {data} = await axios.post('https://60f54d102208920017f39ff9.mockapi.io/cart', obj);
                setCartItems(prev => prev.map(item =>{
                    if(item.parentId === data.parentId){
                        return{
                            ...item,
                            id: data.id
                        }
                    }
                    return item;
                }));
            }
        }catch (e) {
            alert('Error 404!')
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

    const removeItem = async (id) =>{
        try{
            axios.delete(`https://60f54d102208920017f39ff9.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
        }catch (e) {
            alert('Error 404!')
        }
    };

    const onChangeInput = (e) =>{
        setSearchValue(e.target.value)
    };

    const isItemAdded = (id) =>{
        return cartItems.some((obj) => Number(obj.parentId) === Number(id))
    };

    return (
        <AppContext.Provider value={{store, cartItems, likeItem, isItemAdded, setCartOpen, setCartItems, onClickAdd, onLiked}}>
            <div className="wrapper clear">
                <Drawer cartItem={cartItems} onClickCart={() => setCartOpen(false)} onRemove={removeItem} opened={cartOpen}/>
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
                <Route path='/likes' exact>
                    <LikeItem/>
                </Route>
                <Route path='/orders' exact>
                    <Order/>
                </Route>
            </div>
        </AppContext.Provider>
  );
}

export default App;
