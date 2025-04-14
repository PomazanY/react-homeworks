import styles from "./UserList.module.css"

const UserList = ({ users = [] }) => {
   
    const elements = users.map(item => <li  key={item.id}>{item.name} </li>)

    return (
        <div className={styles.container}>
           <ul className={styles.ul}>{elements}</ul>
        </div>

    )
}
export default UserList;