import { useSelector } from "react-redux";

import UserItem from "../UserItem/UserItem";

const UserList = () => {
    const users = useSelector(store => store.users)
    const filter = useSelector(store => store.filter)

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const elements = filteredUsers.map(user =>
        <UserItem key={user.id} name={user.name} />)

    return (
        <ul>
            {elements}
        </ul>
    )
}
export default UserList;