
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './component/Hello';
import { useCallback, useMemo, useRef, useState } from 'react';
import Period from './component/Period';
import Result from './component/Result';

function App() {
  const [startEnd, SetStartEnd] = useState({start : "", end : ""});
  const updateStEd = useCallback(e => {
    SetStartEnd(pre => { 
      if (e.target.name === "start") return {start : e.target.value, end : e.target.value}
      else return {...pre, [e.target.name] : e.target.value} 
    })
  }, [startEnd]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hello />}></Route>
        <Route path='/period' element={<Period 
                                            updateStEd = {updateStEd}
                                            startEnd = {startEnd} />}></Route>
        <Route path='/result' element={<Result 
                                            startEnd = {startEnd} />}></Route>
      </Routes>
    </div>
  );
}

export default App;


