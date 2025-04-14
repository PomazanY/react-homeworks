import UserList from './UserList/UserList'
import { userList } from '../../data/usersList'
import { useState, useEffect, useCallback, useMemo } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setUsers(userList); 
  }, []);

 
  const filterUsers = useCallback(
    user => user.name.toLowerCase().includes(filter.toLowerCase()),
    [filter]
  );

  const filteredUsers = useMemo(() => {
    return users.filter(filterUsers);
  }, [users, filterUsers]);

  const onChange = event =>{
    setFilter(event.target.value)
  }
  return (
    <div>
      <h1>Filter Users</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChange}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;

