import React from 'react';
import { useSelector } from 'react-redux'

const Sum = () => {
    const product = useSelector(state => state.product.product),
          newArr = [...product];
    let sum = 0;

    if (newArr.length > 0) {
        const sumArr = newArr.map(item => item.sum);
        for (const item of sumArr) {
            sum += item
        }
    }

    return <span>Общаяя сумма: {product.length > 0 ? sum : null}</span>
}

export default Sum
