import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    selectCount,
    incrementByAmount
} from './counter'

const MyCounter = () => {
    const { amount, setAmount } = useState('2')
    const value = useSelector(selectCount);
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{value}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
            />
            <button onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}>add</button>
        </div>
    )
}
export default MyCounter