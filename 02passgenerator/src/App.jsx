import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(6);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyToClip = () => {
    passwordRef.current?.select(); 
    // passwordRef.current?.setSelection(0,5) for ranged selection
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllow,charAllow,passwordGenerator])


  return (
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-400 bg-gray-800'>
    <h1 className='text-lg font-bold mb-4'>Password Generator</h1>

    <div className='flex items-center shadow rounded-lg overflow-hidden mb-4'>
      <input 
        type="text"
        value={password}
        placeholder='password'
        readOnly
        className='flex-1 outline-none py-2 px-3 text-gray-900'
        ref={passwordRef}
      />
      <button 
        className='px-3 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-500 transition-colors'
        onClick={copyToClip}
      >
        Copy
      </button>
    </div>

    <div className='flex items-center text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 w-full'>
        <input 
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className='flex-1 cursor-pointer'
        />
        <label className='whitespace-nowrap'>Length: {length}</label>
      </div>
      <input type="checkbox"
        defaultChecked={numAllow}
        id="numAllow"
        onChange={()=>{
          setNumAllow((prev)=>(!prev));
        }}
      />

      <label htmlFor="">Numbers</label>

      <input type="checkbox"
        defaultChecked={charAllow}
        id="charAllow"
        onChange={()=>{
          setCharAllow((prev)=>(!prev));
        }}
      />
      <label htmlFor="">Charaters</label>
    </div>
  </div>
  );
}

export default App;
