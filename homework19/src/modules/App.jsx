import { useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

import UserForm from "./UserForm/UserForm"
import UserList from "./UserList/UserList"

const users = {
  name: '',
  description: '',
}

function App() {

  const [formData, setFormData] = useState({ users });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
        
    setFormData({
      ...formData,
      [name]: value,
   
    });
  };
     
  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

      <Title level={2}>Форма с использованием Ant Design</Title>

      <UserForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} formData={formData} />

      {submittedData && <UserList name={submittedData.name} description={submittedData.description} />}
    </div>

  );

}

export default App;
