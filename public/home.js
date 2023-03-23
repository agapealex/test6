import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Slider from './slider';
import StyledHome from './home.style';
// import { counter } from '../../actions/counterAction';


const Home = () => {
    // const counter = useSelector(state => state.counterReducer.counter)
    // const dispatch = useDispatch()
    debugger;

    // const countNumber = useSelector(state => state.counterReducer.counter)
    return(
        <StyledHome>
            {/* <Slider/> */}
            <p>Scopul nostru este de a crea o comunitate ce se ajuta reciproc in a descoperi persoanele ce profita de persoanele naive si le dau teapa</p>
            <br/>
            <p>Cu ajutorul comunitatii se vor posta diverse rapoarte ce vor dovedi problemele masinilor puse la vanzare</p>
            <br/>
            <p> Cum putem sa luam cat mai putina teapa ?</p>
            <p>= Sa presupunem ca 10 persoane sunt tentate sa plateasca pentru un raport de pe RAR sau Carvertical. Daca unul din ei posteaza aici raportul ceilalti 9 vor scapa de a mai plati un raportul cu teapa.</p>
            <br/>
            <p>= Imediat ce o persoana adauga masina cu probleme, numarul de telefon al propritarului va intra pe lista neagra.</p>
            <p>Asa, pe viitor, putem verifica un numar de telefon cu antecedente pe site si ne putem feri de noua lui masina cu potentiale probleme "reparate".</p>
            <p>cunter : {countNumber}</p>
            {/* <button onClick={ () => dispatch(counter())}>cnt</button> */}


        </StyledHome>
    )
}

export default Home;