import React from 'react'
import * as math from 'mathjs'
import {useState} from 'react'

function App() {
  const [inputExpression, setInputExpression] = useState('')
  const [result, setResult] = useState('')


    const handleButtonClick = (value)=> {
      setInputExpression(inputExpression + value)
      
    }

    const handleCalculate = ()=> {
     try{
      const calculatedResult = math.evaluate(inputExpression).toString();
      setResult(calculatedResult)
     }
     catch (error){
      setResult('Error!')
    }
    console.log(result)
  }

    const handleClear = ()=> {
        setInputExpression('')
        setResult('')
    }
  return (
   
    <div className="app">
     
        <input value={inputExpression} onChange={(e)=> setInputExpression(e.target.value)}/>
        <div className='display'>{result  === '' ? '' : `${result}`}</div>
      <div className='row'>
        <button className='btn' onClick={handleClear}>C</button>
        <button className='btn'  onClick={()=>handleButtonClick('()')}>()</button>
        <button  className='btn' onClick={()=>handleButtonClick('%')}>%</button>
        <button className='btn'  onClick={()=>handleButtonClick('/')}>/</button>
        </div>

        <div className='row'>
        <button  className='btn' onClick={()=>handleButtonClick('7')}>7</button>
        <button className='btn'  onClick={()=>handleButtonClick('8')}>8</button>
        <button className='btn'  onClick={()=>handleButtonClick('9')}>9</button>
        <button  className='btn' onClick={()=>handleButtonClick('*')}>*</button>
        </div>

        <div className='row'>
        <button className='btn'  onClick={()=>handleButtonClick('4')}>4</button>
        <button className='btn'  onClick={()=>handleButtonClick('5')}>5</button>
        <button className='btn'  onClick={()=>handleButtonClick('6')}>6</button>
        <button className='btn'  onClick={()=>handleButtonClick('-')}>-</button>
        </div>

        <div className='row'>
        <button className='btn'  onClick={()=>handleButtonClick('1')}>1</button>
        <button className='btn'  onClick={()=>handleButtonClick('2')}>2</button>
        <button className='btn'  onClick={()=>handleButtonClick('3')}>3</button>
        <button  className='btn' onClick={()=>handleButtonClick('+')}>+</button>
        </div>

        <div className='row'>
        <button className='btn'  onClick={() => setInputExpression(inputExpression.slice(0, -1))}>x</button>
        <button className='btn'  onClick={()=>handleButtonClick('0')}>0</button>
        <button className='btn'  onClick={()=>handleButtonClick('.')}>.</button>
        <button className='btn'  onClick={handleCalculate}>=</button>
        </div>
    </div>
    
  );
}

export default App;

