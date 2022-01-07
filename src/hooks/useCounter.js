import  { useState } from 'react'

export const useCounter = (value) => {

    const [counter, setCounter] = useState(value | 0);

    const increaseBy = (value) => {
        setCounter( prev => Math.max( prev + value, 0 ));
    }

    return {
        counter,
        increaseBy,
    }
}
