import { Button, Form, Input } from 'antd';

import fields from './fields';


const UserForm = ({ formData, handleInputChange, handleSubmit }) => {

    
    return (
        <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 3.5 }}
            style={{ maxWidth: 300 }}
            autoComplete="off"
        >

            <Form.Item label="Name">
                <Input  {...fields.username} value={formData.name} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Description" >
                <Input {...fields.description} value={formData.description} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleSubmit}>Send</Button>
            </Form.Item>
        </Form>
    )
}
export default UserForm;