import { useState } from "react";

import UserForm from "./UserForm/UserForm"
import UserList from "./UserList/UserList"

function App() {
  const [formData, setFormData] = useState({});
 const handleFormSubmit = data =>{
    setFormData(data);
  }
  
  return (
    <>
      <h1>Form using Ant Desing</h1>
      <UserForm onFormSubmit={handleFormSubmit}/>
      {formData && <UserList name={formData.username} description={formData.description}/>}
    </>
  )
}

export default App
