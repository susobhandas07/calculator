import React from 'react';
import Button from './key';
import './App.css';
import './toggle-switch.css'

function App() {
  let [theme,setTheme]=React.useState('1');
  let [mathString,setMathString]=React.useState('');
  let [displayNum,setDisplayNum]=React.useState('0');
  function handleChange(event){
    let {name,value}=event.target;
    applyTheme(value);
    setTheme(value);
  }
  function applyTheme(value){
    if(value==='1'){
      document.documentElement.style.setProperty('--main-background','hsl(222, 26%, 31%)');
      document.documentElement.style.setProperty('--screen-background','hsl(224, 36%, 15%)');
      document.documentElement.style.setProperty('--rest-background','hsl(223, 31%, 20%)');
      document.documentElement.style.setProperty('--btn-color','hsl(30, 25%, 89%)');
      document.documentElement.style.setProperty('--btn-shadow','hsl(28, 16%, 65%)');
      document.documentElement.style.setProperty('--special-btn-color','hsl(225, 21%, 49%)');
      document.documentElement.style.setProperty('--special-btn-shadow','hsl(224, 28%, 35%)');
      document.documentElement.style.setProperty('--equal-btn','hsl(6, 63%, 50%)');
      document.documentElement.style.setProperty('--equal-btn-shadow','hsl(6, 70%, 34%);');
      document.documentElement.style.setProperty('--btn-text-color','hsl(221, 14%, 31%)');
      document.documentElement.style.setProperty('--special-btn-text-color','hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--equal-sign-color','hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--header-text','hsl(0, 0%, 100%)');
    }
    else if(value==='2'){
      document.documentElement.style.setProperty('--main-background','hsl(0, 0%, 90%)');
      document.documentElement.style.setProperty('--screen-background','hsl(0, 0%, 93%)');
      document.documentElement.style.setProperty('--rest-background','hsl(0, 5%, 81%)');
      document.documentElement.style.setProperty('--btn-color','hsl(45, 7%, 89%)');
      document.documentElement.style.setProperty('--btn-shadow','hsl(35, 11%, 61%)');
      document.documentElement.style.setProperty('--special-btn-color','hsl(185, 42%, 37%)');
      document.documentElement.style.setProperty('--special-btn-shadow','hsl(185, 58%, 25%)');
      document.documentElement.style.setProperty('--equal-btn','hsl(25, 98%, 40%)');
      document.documentElement.style.setProperty('--equal-btn-shadow','hsl(25, 99%, 27%)');
      document.documentElement.style.setProperty('--btn-text-color','hsl(60, 10%, 19%)');
      document.documentElement.style.setProperty('--equal-sign-color','hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--header-text','hsl(60, 10%, 19%)');
    }
    else if(value==='3'){
      document.documentElement.style.setProperty('--main-background','hsl(268, 75%, 9%)');
      document.documentElement.style.setProperty('--screen-background','hsl(268, 71%, 12%)');
      document.documentElement.style.setProperty('--rest-background','hsl(268, 71%, 12%)');
      document.documentElement.style.setProperty('--btn-color','hsl(268, 47%, 21%)');
      document.documentElement.style.setProperty('--btn-shadow','hsl(290, 70%, 36%)');
      document.documentElement.style.setProperty('--special-btn-color','hsl(281, 89%, 26%)');
      document.documentElement.style.setProperty('--special-btn-shadow','hsl(285, 91%, 52%)');
      document.documentElement.style.setProperty('--equal-btn','hsl(176, 100%, 44%)');
      document.documentElement.style.setProperty('--equal-btn-shadow','hsl(177, 92%, 70%)');
      document.documentElement.style.setProperty('--btn-text-color','hsl(52, 100%, 62%)');
      document.documentElement.style.setProperty('--equal-sign-color','hsl(198, 20%, 13%)');
      document.documentElement.style.setProperty('--header-text','hsl(52, 100%, 62%)');
    }
  }
  function handleInput(event){
    let value=event.target.value;
    if((value>='0' && value<='9')|| value==='.'){
      if(displayNum.length<9){
        setDisplayNum(prev=>{
          if(prev==='0'){
              return value;
            }
          return (prev+value);
          });}
      }
    else if(value==='+' || value==='-' || value==='x' || value==='/'){
      if(value==='x'){
        value='*';
      }
      if(mathString===''){
        setMathString(prev=>displayNum+value);
      }
      else{
        setMathString(prev=>prev+value+displayNum);
      }
      setDisplayNum('0');
    }
    else if(value==='='){
      mathString+=displayNum;
      function parse(str) {
        return Function(`'use strict'; return (${str})`)();
      }
      setDisplayNum(parse(mathString));
      setMathString('');
    }
    else if(value==='DEL'){
      let newString=displayNum.substring(0,displayNum.length-1);
      if(newString===''){
        newString='0';
      }
      setDisplayNum(newString);
    }
    else if(value==='RESET'){
      setDisplayNum('0');
      setMathString('');
    }
  }
  return (
    <main>
      <header> 
        <h2>Calc</h2>
        <p>Theme</p>
        <section id='toggle-switch'>
          <label className='switch-text' id='switch-input-1' htmlFor="one">1</label>
          <label className='switch-text' id='switch-input-2' htmlFor="two">2</label>
          <label className='switch-text' id='switch-input-3' htmlFor="three">3</label>
          <input type="radio" checked={theme==='1'} value='1' name='theme' onChange={(event)=>handleChange(event)} className='theme-select' id='one'></input>
          <input type="radio" checked={theme==='2'} value='2' name='theme' onChange={(event)=>handleChange(event)} className='theme-select' id='two'></input>
          <input type="radio" checked={theme==='3'} value='3' name='theme' onChange={(event)=>handleChange(event)} className='theme-select' id='three'></input>
          <section id='switch-container'>
              <label htmlFor="one"></label>
              <label htmlFor="two"></label>
              <label htmlFor="three"></label>
              <span id='slider'></span>
          </section>
        </section>
      </header>
      <section className="container" id ="display--result" >{displayNum}</section>
      <section className="container" id="key-pad">
        <Button value='7' handeler={handleInput}/>
        <Button value='8' handeler={handleInput}/>
        <Button value='9' handeler={handleInput}/>
        <Button value='DEL' handeler={handleInput}/>
        <Button value='4' handeler={handleInput}/>
        <Button value='5' handeler={handleInput}/> 
        <Button value='6' handeler={handleInput}/>
        <Button value='+' handeler={handleInput}/>
        <Button value='1' handeler={handleInput}/>
        <Button value='2' handeler={handleInput}/>
        <Button value='3' handeler={handleInput}/> 
        <Button value='-' handeler={handleInput}/>
        <Button value='.' handeler={handleInput}/> 
        <Button value='0' handeler={handleInput}/>
        <Button value='/' handeler={handleInput}/>
        <Button value='x' handeler={handleInput}/>
        <Button value='RESET' handeler={handleInput}/>
        <Button value='=' handeler={handleInput}/>  
      </section>
    </main>
  );
}

export default App
