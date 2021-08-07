import React from 'react';
import { useSelector } from 'react-redux'

const Sum = () => {
    const product = useSelector(state => state.product.product);
    const a = [...product]
    let sum = 0
    if (a.length > 0) {
        console.log(a);
        const arr = a.map(item => item.sum)
        console.log(arr);
        for (const item of arr) {
            sum += item
        }
    }

    return <span>Общаяя сумма: {product.length > 0 ? sum : null}</span>
}

export default Sum
