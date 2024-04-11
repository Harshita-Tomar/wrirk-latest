"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div className='flex justify-center items-center h-96'>
            <div>
                <button
                    aria-label="Increment value" className='p-6 bg-red-700 text-white rounded-3xl me-4'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className='text-3xl'>{count}</span>
                <button className='p-6 bg-red-700 text-white rounded-3xl ms-4'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button><br /><br />
                <button className='p-6 bg-red-700 text-white rounded-3xl ms-4'
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    incrementByAmount=+10
                </button>
            </div>
        </div>
    )
}

export default Counter