import Greeting from "../../components/Greeting/Greeting"
import ShoppingList from "../../components/ShoppingList/ShoppingList"

import './App.css'

function App() {
  const item = {name: 'John'}
  return (
    <>
    <Greeting name={item.name}/>
    <ShoppingList items={}/>
    </>
  )
}

export default App
