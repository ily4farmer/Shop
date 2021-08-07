import React from 'react'
import "./Header.sass"
import menu from "../../img/menu.svg"
import basket from "../../img/basket.svg"

const Header = ({setburger}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div onClick={() => setburger(true)} className="header__btn">
                        <img src={menu} alt="menu" />
                    </div>
                    <div className="header__basket">
                        <img src={basket} alt="basket" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
