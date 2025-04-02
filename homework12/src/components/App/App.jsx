import ValueDisplay from '../ValueDisplay/ValueDisplay';

import {useState} from 'react'
import './App.css'

function App() {
  const [state, setState] = useState('');

    const handleChange = (e)=>{
        setState(e.target.value)
    }

  return (
    <>
      <div>
        <p>Current and Previous Value</p>
        <input 
        type="text"
        value={state}
        onChange={handleChange} 
        placeholder='enter text'/>

        <ValueDisplay value={state}/>      

      </div>
    </>
  )
}

export default App
