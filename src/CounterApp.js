import { useCounter } from './hooks/useCounter'
import './index.css'
export const CounterApp = ({ value }) => {

    const { counter, increaseBy } = useCounter(value);

    return (
        <div>
            <h1> CounterApp </h1>
            <h2>{ counter }</h2>
            
            <div className='buttons-container '>
                <button 
                    onClick={ () => increaseBy( +1 ) }
                >
                    +1 
                </button>
                <button 
                    className='button-minus' 
                    onClick={ () => increaseBy( -1 ) }
                > 
                    -1 
                </button>
            </div>
        </div>
    )
}
