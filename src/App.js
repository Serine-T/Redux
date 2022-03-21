import { useSelector, useDispatch } from 'react-redux';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increament = ()=>{
    dispatch({type: 'INC'})
  }
  const decreament = ()=>{
    dispatch({type: 'DEC'})
  }

  const addBy = ()=>{
    dispatch({type: 'ADD', payload: 10})
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={addBy}>AddBy 10</button>
    </div>
  );
}

export default App;
