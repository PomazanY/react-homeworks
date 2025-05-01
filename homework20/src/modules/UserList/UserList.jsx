import { useSelector } from "react-redux";

import { selectUsers } from "../../redux/user-slice/user-selector";

const UserList = () => {
    const users = useSelector(selectUsers)
    const elements = users.map(({ name, email }) => (<li key={email}>{name}({email})</li>))
    return (
        <>
            <h1>User List</h1>
            <ul>
                {elements}
            </ul>

        </>
    )
}
export default UserList;
