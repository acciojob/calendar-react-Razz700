import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';
import RenderCalendar from "./RenderCalendar";

const App = () => {
  const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const [currentdate,setcurrentdate]=useState(new Date());
  const [year,setyear]=useState(new Date().getFullYear());
  const [month,setmonth]=useState(new Date().getMonth());
  console.log(currentdate,'in app');
const handleyear=(e)=>{
  const val=parseInt(e.target.value);
  setyear(val);
  setcurrentdate(new Date(val,month,1));
}
const handleselect=(e)=>{
const val=parseInt(e.target.value);
setmonth(val);
setcurrentdate(new Date(year,val,1));
}
const handlebtn=(e)=>{
if (e.target.value=='year-') {
  setyear(year-1);
  const val=year-1;
setcurrentdate(new Date(val,month,1));
}else if (e.target.value=='year+') {
  setyear(year+1);
  const val=year+1;
setcurrentdate(new Date(val,month,1));
}else if (e.target.value=='month-') {
  (month==0)?setmonth(11):setmonth(month-1);
  let val;
  month==0?val=11:val=month-1;
  setcurrentdate(new Date(year,val,1));
}else if (e.target.value=='month+') {
(month==11)?setmonth(0):setmonth(month+1);  
let val;
month==11?val=0:val=month+1;
setcurrentdate(new Date(year,val,1));
}
}
  return (
    <div id="main">
      <h1>Calendar</h1>
      <select value={month} onChange={handleselect}>
        <option value='0'>January</option>
        <option value='1'>February</option>
        <option value='2'>March</option>
        <option value='3'>April</option>
        <option value='4'>May</option>
        <option value='5'>June</option>
        <option value='6'>July</option>
        <option value='7'>August</option>
        <option value='8'>September</option>
        <option value='9'>October</option>
        <option value='10'>November</option>
        <option value='11'>December</option>
      </select>
      <input onChange={handleyear} type="number" value={year} />
      <hr/>
     <RenderCalendar week={week} currentdate={currentdate} />
      <hr/>
      <div id="btns">
        <button onClick={handlebtn} value='year-'>{'<<'}</button>
        <button onClick={handlebtn} value={'month-'}>{'<'}</button>
        <button onClick={handlebtn} value={'month+'}>{'>'}</button>
        <button onClick={handlebtn} value={'year+'}>{'>>'}</button>
      </div>
    </div>
  )
}


export default App;
