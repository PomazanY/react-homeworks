import UserForm from "../UserForm/UserForm";

import { useSelector, useDispatch } from "react-redux";

import { addUsersStore } from "../../redux/actionCreators";

const User = () => {

    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    const addItem = data => {
        const action = addUsersStore(data)
        dispatch(action)
    }

    const elements = users.map((user) => (
        <div key={user.id}>
            <p>Name: {user.username} </p>
            <p>Status: {user.status}</p>
        </div>
    ))
    return (
        <>
            <h1>User Profile</h1>
            <h3>User Information</h3>
            {elements}
            <UserForm submitForm={addItem} />
        </>

    )
}
export default User;