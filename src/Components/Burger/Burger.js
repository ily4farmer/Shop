import React from 'react'
import { Link } from 'react-router-dom'
import "./Burger.sass"
import close from "../../img/close.svg"

const Burger = ({chapter, setburger}) => {
    console.log(chapter[0].rid);

    return (
        <div className="burger">
            <div className="burger-container">
                <div onClick={() => setburger(false)} className="burger__btn">
                    <img src={close} alt="close" />
                </div>
                <nav className="burger__list">
                    <li className="burger__item"><Link to="/">Главная</Link></li>
                    {chapter.map((item)=> <li key={item.rid + 1}  className="burger__item"><Link to={`/${item.rid}`}>{item.rname}</Link></li>)}
                </nav>
            </div>
        </div>
    )
}

export default Burger
