import {Plus, ShoppingCart, UserCircle} from "phosphor-react";

function App() {
    return (
        <div className="wrapper clear">
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
            <div className="content p-40">
                <h1 className='mb-30'>Все кроссовки</h1>

                <div className="d-flex">
                    <div className="card">
                        <img width={133} height={112} src="/store/1.jpg" alt=""/>
                        <h5>Nike Air Zoom G.T. Run</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена: </span>
                                <b>8 499 c</b>
                            </div>
                            <button className='button'><Plus size={15}/></button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/store/2.jpg" alt=""/>
                        <h5>Nike Air Zoom G.T. Run</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена: </span>
                                <b>8 499 c</b>
                            </div>
                            <button className='button'><Plus size={15}/></button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/store/3.jpg" alt=""/>
                        <h5>Nike Air Zoom G.T. Run</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена: </span>
                                <b>8 499 c</b>
                            </div>
                            <button className='button'><Plus size={15}/></button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src="/store/4.jpg" alt=""/>
                        <h5>Nike Air Zoom G.T. Run</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена: </span>
                                <b>8 499 c</b>
                            </div>
                            <button className='button'><Plus size={15}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
