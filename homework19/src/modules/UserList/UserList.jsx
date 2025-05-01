import { Card } from 'antd';

const UserList =({name, description})=>{

    return (
        <Card title="Data sent" variant="borderless" style={{ marginTop: '20px' }}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong> Description:</strong> {description}</p>
      </Card>
    )
}
export default UserList;