import React,{useState} from 'react';
import './App.css';

function App() {
const [no, setNo] = useState({first:"", scond:""});
const [secondNo, setSecondNo] = useState("");
const [success,setSuccess] = useState("");
const [error,setError] = useState(false);
let {first,second} = no;
function handleChange(e){
  e.preventDefault();
  setNo({...no,[e.target.name]:e.target.value});
  console.log(no);
  console.log(">>>>><<<<<<"+typeof(no.first))
}
function addition(){
  
  if ( no.first >= Number.MIN_VALUE && no.second <=Number.MAX_VALUE) {
    setSuccess(`Result : ${Math.floor(no.first)+Math.floor(no.second)}`);
    setError(false);
  } else {
  setError(true);
  setSuccess("");}
  first="";
  second="";
}
function substraction(){
  if ( no.first >= Number.MIN_VALUE && no.second <=Number.MAX_VALUE) {
    setSuccess(`Result : ${Math.floor(no.first)-Math.floor(no.second)}`);
    setError(false);
  } 
  else {
  setError(true);
  setSuccess("");}
  first="";
  second="";
}
function multiplication(){
  if ( no.first >= Number.MIN_VALUE && no.second <=Number.MAX_VALUE) {
    setSuccess(`Result : ${Math.floor(no.first)*Math.floor(no.second)}`);
    setError(false);
  } 
  else {
  setError(true);
  setSuccess("");}
  first="";
  second="";
}
function division(){
  if ( no.first >= Number.MIN_VALUE && no.second <=Number.MAX_VALUE) {
    setSuccess(`Result : ${Math.floor(no.first)/Math.floor(no.second)}`);
    setError(false);
  } 
  else {
  setError(true);
  setSuccess("");}
  first="";
  second="";
}
  return (
   <div style={{margin:"10% 30%",display:"flex", flexFlow:"column", gap:"15px"}}>
    <h1 style={{margin:"auto"}}>Calculator</h1>
    <input placeholder='Enter first number' name='first' value={first} onChange={handleChange}/>
    <input placeholder='Enter second number' name='second' value={second} onChange={handleChange}/>
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
    <button style={{backgroundColor:"pink"}} onClick={addition}>+</button>
    <button style={{backgroundColor:"brown"}}onClick={substraction}>-</button>
    <button style={{backgroundColor:"yellow"}} onClick={multiplication}>*</button>
    <button style={{backgroundColor:"blue"}} onClick={division}>/</button>
    </div>
    {
      success && (
        <div>
          <h2 style={{color:"green"}}>Success!</h2>
         <p>{success}</p>
        </div>
      )
    }
    {
      error && (
        <div>
          <h2 style={{color:"red"}}>Error!</h2>
         <p>First number cannot be empty</p>
        </div>
      )
    }

   </div>
  );
}

export default App;
