import React, {useContext} from 'react';
import Card from "../components/Card/card";
import AppContext from '../context';

const LikeItem = ({onLiked}) => {
    const {likeItem} = useContext(AppContext);


    return (
        <div className="content p-40">
            <div className='d-flex align-center mb-30 justify-between'>
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    likeItem.map((card, i) => {
                        return (
                            <Card
                                key={i}
                                favorited={true}
                                clickFavorite={onLiked}
                                {...card}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LikeItem;