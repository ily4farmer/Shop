import React from 'react'
import "./Header.sass"
import menu from "../../img/menu.svg"
import basketImg from "../../img/basket.svg"
import Basket from '../Basket/Basket'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Header = ({setburger}) => {
    const [show, setShow] = useState(false)
    const basket = useSelector(state => state.basket.basket)
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div onClick={() => setburger(true)} className="header__btn">
                        <img src={menu} alt="menu" />
                    </div>
                    <div onClick={() => setShow(true)} className="header__basket">
                        <img src={basketImg} alt="basket" />
                        <div style={{display: basket.length > 0 ? "flex" : "none"}} className="header__counter">
                            {basket.length}
                        </div>
                    </div>
                    {show ? <Basket setHide={setShow}/> : null}
                </div>
            </div>
        </header>
    )
}

export default Header
