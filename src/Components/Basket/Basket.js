import React from 'react'
import "./Basket.sass"
import close from "../../img/close.svg"
import { useDispatch, useSelector } from 'react-redux'

const Basket = ({setHide}) => {
    const dispatch = useDispatch(), 
          basket = useSelector(state => state.basket.basket)

    function buy() {
        dispatch({type: "REMOVE__BASKET", payload: []})
        dispatch({type: "PRODUCT_REMOVE", payload: []})
        dispatch({type: "CLEAR__INPUT", payload: true})
    }
    return (
        <section className="basket">
            <div className="basket-block">
                <img onClick={() => setHide(false)} className="basket__btn" src={close} alt="close" />
                {basket.length <= 0 ?
                    <h3 className="basket__empty">Пусто</h3>
                    :
                    <div className="basket__wrapper">
                        <ul className="basket__list">
                            {basket.map(item => <li key={item.id} className="basket__item">
                                <span>{item.name}</span>
                                <span>К-во: {item.amount}</span>
                            </li>)}
                        </ul>
                        <div className="basket__footer">
                            <button onClick={buy} className="basket__pay">Купить</button>
                        </div>
                    </div>}
                </div>
        </section>
    )
}


export default Basket
