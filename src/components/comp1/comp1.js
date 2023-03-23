import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Comp1 = () => {

    const countNumber = useSelector(state => state.counterReducer.counter)

    return(
        <>
            <h1>counter: {countNumber}</h1>
        </>

    )
}

export default Comp1;