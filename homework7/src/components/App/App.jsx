import BlockText from '../BlockText/BlockText'

import LanguareProvider from '../../context/LanguareProvider'

import './App.css'

function App() {


  return (
    <LanguareProvider>
      <BlockText/>
    </LanguareProvider>
  )
}

export default App
