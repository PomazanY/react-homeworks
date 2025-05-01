import { Button, Form, Input } from 'antd';

import fields from './fields';


const UserForm = ({ onFormSubmit }) => {

    const onFinish = values => {
        onFormSubmit(values);
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 3.5 }}
            style={{ maxWidth: 300 }}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item {...fields.username}>
                <Input  />
            </Form.Item>
            <Form.Item {...fields.description}>
                <Input  />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>Send</Button>
            </Form.Item>
        </Form>
    )
}
export default UserForm;