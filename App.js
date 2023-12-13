import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


const App = () => {
  const [names, setNames] = useState(['shakial', 'ali', 'elnaz']);
  const [inputValue, setInputValue] = useState('');

  const randomNames = () => {
    const random = Math.floor(Math.random() * names.length);
    alert(names[randomIndex]);
  };

  const addToNames = () => {
    setNames([...names, inputValue]);
    setInputValue('');
  };
  return (
    
    <div>
      <button onClick={randomNames}>نمایش نام تصادفی</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AddToNames}>اضافه کردن نام</button>
    </div>
  );
};
export default App;
