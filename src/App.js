
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './component/Hello';
import Category from './component/Category';
import { useCallback, useMemo, useRef, useState } from 'react';
import Period from './component/Period';
import Result from './component/Result';

function App() {
  const valueArray = useMemo(()=>["전부", "국경일", "공휴일", "기념일", "24절기", "잡절"], [])
  const pathArray = useMemo(()=>["", "getHoliDeInfo", "getRestDeInfo", "getAnniversaryInfo", "get24DivisionsInfo", "getSundryDayInfo"], [])
  const select = useRef(0);
  const [startEnd, SetStartEnd] = useState({start : "", end : ""});
  const updateSelect = useCallback(e => {select.current = parseInt(e.target.value)}, [select.current]);
  const updateStEd = useCallback(e => {
    SetStartEnd(pre => { 
      if (e.target.name === "start") return {start : e.target.value, end : e.target.value}
      else return {...pre, [e.target.name] : e.target.value} 
    })
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Hello />}></Route>
        <Route path='/category' element={<Category 
                                            valueArray = {valueArray}
                                            updateSelect = {updateSelect} />}></Route>
        <Route path='/period' element={<Period 
                                            updateStEd = {updateStEd}
                                            startEnd = {startEnd} />}></Route>
        <Route path='/result' element={<Result 
                                            valueArray = {valueArray}
                                            startEnd = {startEnd}
                                            select = {select.current}
                                            pathArray = {pathArray} />}></Route>
      </Routes>
    </div>
  );
}

export default App;


