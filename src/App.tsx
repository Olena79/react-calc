import './App.css';
import Page from './component/page';
import Field from './component/field';
import Button from './component/button';

import React, { useState } from 'react';

//===========================================================

function App() {
  const [expression, setExpression] = useState<string>(''); // Зберігатиме вираз калькулятора
  const [result, setResult] = useState<number | string>(''); // Зберігатиме результат обчислення


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.dataset.value;
    if (value) {
      if (value === '=') {
        // Якщо натиснуто "=", обчислити вираз
        try {
          const calculatedResult = eval(expression);
          setResult(calculatedResult);
          setExpression(String(calculatedResult));
        } catch (error) {
          setResult('Error');
        }
      } else {
        // Додати символ до виразу
        setExpression(prevExpression => prevExpression + value);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Page>
          <Field children={expression ? expression : 0} />
          <Button value="Clear" onClick={() => { setExpression(''); setResult(''); }} style={{ minWidth: '60px', minHeight: '40px', border: '3px double orange' }}>C</Button>
          <div className='main'>
            <div className='side'>
              <div className='block'>
                <Button value="7" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }}>7</Button>
                <Button value="8" onClick={handleClick} children='8' style={{ minWidth: '60px', minHeight: '40px' }} />
                <Button value="9" onClick={handleClick} children='9' style={{ minWidth: '60px', minHeight: '40px' }} />
              </div>
              <div className='block'>
                <Button value="4" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='4' />
                <Button value="5" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='5' />
                <Button value="6" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='6' />
              </div>
              <div className='block'>
                <Button value="1" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='1' />
                <Button value="2" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='2' />
                <Button value="3" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='3' />
              </div>
              <div className='block'>
                <Button value="0" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='0' />
                <Button value="." onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='.' />
                <Button value="+" onClick={handleClick} style={{ minWidth: '60px', minHeight: '40px' }} children='+' />
              </div>
            </div>
            <div className='side'>
              <Button value="/" onClick={handleClick} style={{ minWidth: '120px', minHeight: '40px' }} children='/' />
              <Button value="*" onClick={handleClick} style={{ minWidth: '120px', minHeight: '40px' }} children='*' />
              <Button value="-" onClick={handleClick} style={{ minWidth: '120px', minHeight: '40px' }} children='-' />
              <Button value="=" onClick={handleClick} style={{ minWidth: '120px', minHeight: '40px', backgroundColor: 'orange' }} children='=' />
            </div>
          </div>
        </Page>
      </header>
    </div>
  );
}

export default App;
