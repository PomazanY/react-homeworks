import { Card } from 'antd';

const UserList =({name, description})=>{

    return (
        <Card title="Data sent" variant="borderless" style={{ width: 300 }}>
        <p><span style={{fontWeight:'600'}}>Name:</span> {name}</p>
        <p><span style={{fontWeight:'600'}}>Description:</span>{description}</p>
      </Card>
    )
}
export default UserList;