import React from 'react'
import "./Footer.sass"
import Sum from "../Sum/Sum"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Footer = () => {
    const dispatch = useDispatch(),
          product = useSelector(state => state.product.product)

    async function productData() {
        if (product.length === 0) {
            return console.log("пусто");
        }
        const body = new FormData();
        for (const elem of product) {
            body.append(`product[${elem.id}]`, elem.amount);
        }
        await axios({
            method: 'post',
            url: 'https://datainlife.ru/junior_task/add_basket.php',
            data: body,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function (response) {
                console.log(response);
                const newArr = product.map(item => item)
                dispatch({type: "ADD__BASKET", payload: [...newArr]})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <Sum/>
                    <button onClick={productData} className="footer__btn">В корзину</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
