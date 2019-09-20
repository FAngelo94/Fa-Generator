import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {setNumber, changeNumber} from './redux/actions/number'


function App(props) {
  console.log("STORE",props)
  React.useEffect(()=>{
    const {dispatchSetNumber} = props;
    dispatchSetNumber()
  },[]);
  const number = props.state.number;
  return (
    <div className="App">
      <button onClick={()=>{
        const {dispatchChangeNumber} = props;
        dispatchChangeNumber(number+1)
      }}>Aumenta</button>
      <p>{number}</p>
      <button onClick={()=>{
        const {dispatchChangeNumber} = props;
        dispatchChangeNumber(number-1)
      }}>Diminuisci</button>
    </div>
  );
}

export default connect(
  state => {
    return {
      state: state.number
    };
  },
  dispatch => {
    return {
      dispatchSetNumber: () => dispatch(setNumber()),
      dispatchChangeNumber: (n) => dispatch(changeNumber(n))
    };
  }
)(App);
