import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {

    const dispatch = useDispatch();
    const {product, sum} = useSelector(state => state.product)
    const [value, setValue] = useState(20)
    console.log(product.length);
    if (product.length > 0) {
        const newArr = product.map(item => item.price)
        console.log(newArr.reduce((acc, elem) => acc + elem));
        const a = newArr.reduce((acc, elem) => acc + elem);
        setValue(a)
    }
    
    return (
        <div>
            <div className="footer-block">
                <span className="footer__sum">Общая сумма {product.length > 0 ? value : 0}</span>
                <button className="footer__btn">В корзину</button>
            </div>
        </div>
    )
}

export default index
