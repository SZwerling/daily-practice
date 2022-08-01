import React, {useState} from 'react';


const FunctionCounter = () => {

    const [count, setCount] = useState(0)

    return(
        <div className="function_counter">
            <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='btn' onClick={() => setCount(count - 1)}>Decrement</button>
            <p>{count}</p>
        </div>
    )
}

export default FunctionCounter;