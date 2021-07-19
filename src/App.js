import {ArrowRight, MagnifyingGlass, Plus, ShoppingCart, UserCircle} from "phosphor-react";
import Card from "./components/card";
import Header from "./components/header";
import Drawer from "./components/drawer";

function App() {
    return (
        <div className="wrapper clear">
            <div style={{display: 'none'}} className="overlay">
                <Drawer/>
            </div>
            <Header/>
            <div className="content p-40">
                <div className='d-flex align-center mb-30 justify-between'>
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <MagnifyingGlass size={24} />
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex">
                    <Card/>
                </div>
            </div>
        </div>
  );
}

export default App;
