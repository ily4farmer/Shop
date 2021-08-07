import React from 'react'
import "./ChapterItem.sass"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChapterItem = ({item}) => {
    const dispatch = useDispatch()
    const {product, sum} = useSelector(state => state.product)
    const [value, setValue] = useState('')
   
    function inputHandler(e, id) {
        // Удаление одинаковых объектов из product
        const newArr = product.filter((item) => {
            return item.id !== id
        })
        const amount = e.target.value
        if (amount <= 0) {
            setValue(0)
            // Т.к. в к-во продукта = 0, удаляем данный продук из store
            const newArr = product.filter(item => item.id !== id)
            return dispatch({type: "PRODUCT_ADD", payload:[...newArr]})
        } else {
            setValue(amount)
            const sum = amount * item.gprice
            const data = {
                id: item.gid,
                price: item.gprice,
                amount: amount,
                sum: sum
            }
            dispatch({type: "PRODUCT_ADD", payload:[...newArr, data]})
        }
    }
    return (
        <li className="chapter__item" key={item.gid}>
            <form className="form" action="#">
                <p className="chapter__id">{item.gid}</p>
                <p className="form__name">{item.gname}</p>
                <p className="form__price">{item.gprice}</p>
                <input className="form__input" value={value} onChange={(e) => inputHandler(e, item.gid)} type="tel" />
                <p className="form__sum">{value * item.gprice}</p>
            </form>
        </li>
    )
}

export default ChapterItem
