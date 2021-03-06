import React, { useState, useMemo  } from 'react'
import "./ChapterItem.sass"
import { useDispatch, useSelector } from 'react-redux'

const ChapterItem = ({item}) => {
    const dispatch = useDispatch(),
          {product, isClear} = useSelector(state => state.product), 
          [value, setValue] = useState('');

    // отменяет ошибку связанную с превышением рендеров
    useMemo(()=> {
        if (isClear) {
            setValue('');
        }
    }, [isClear])
    
   
    const inputHandler = (e, id) => {
        dispatch({type: "CLEAR__INPUT", payload: false})
        const amount = e.target.value;
        // Удаление одинаковых объектов из product
        const newArr = product.filter(item => item.id !== id)
        if (amount <= 0) {
            setValue('')
            // Т.к. в к-во продукта = 0, удаляем данный продук из store
            return dispatch({type: "PRODUCT_REMOVE", payload:[...newArr]})
        } else {
            setValue(amount)
            const sum = amount * item.gprice
            const data = {
                id: item.gid,
                price: item.gprice,
                name: item.gname,
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
                <input className="form__input" value={value} onChange={(e) => inputHandler(e, item.gid)} type="number" />
                <p className="form__sum">{value === null ? 0 : value * item.gprice}</p>
            </form>
        </li>
    )
}

export default ChapterItem