import './Basket.css'
import React, { useState, useEffect } from 'react';
import Button from '../button/Button'

const Basket = () => {

let [basketItem, setBasketItem] = useState(0);

const itemAdd = () => {
    setBasketItem(items =>  items < 50 ? items + 1: items )
}
const itemRemove = () => {
    setBasketItem(items =>  items !== 0 ? items - 1: items )
}

return (
    <div>
        <div className="basket-icon">
            <div className="item-number">{basketItem}</div>
        </div>
        <Button text={'Add To Cart'} color={'primary'}  basketItems={basketItem}  onClick={itemAdd} />
        <Button text={'Remove'} color={'warning'}  basketItems={basketItem}  onClick={itemRemove} />
    </div>
);

}

export default Basket;