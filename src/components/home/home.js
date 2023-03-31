import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Slider from './slider';
import StyledHome from './home.style';
import { counter } from '../../actions/counterAction';


const Home = () => {
    // const counter = useSelector(state => state.counterReducer.counter)
    const dispatch = useDispatch()

    const countNumber = useSelector(state => state.counterReducer.counter)
    return(
        <StyledHome>
            {/* <Slider/> */}
            <p> comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate</p>
            <br/>
            <p> comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate</p>
            <br/>
            <p> comunitatev comunitate comunitate comunitate comunitate comunitate</p>
            <p>=  comunitat comunitatev comunitate comunitate comunitate.</p>
            <br/>
            <p>= comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate comunitate</p>
            <p>A comunitate comunitate comunitate comunitate comunitate".</p>
            <p>counter : {countNumber}</p>
            <button onClick={ () => dispatch(counter())}>cnt</button>


        </StyledHome>
    )
}

export default Home;