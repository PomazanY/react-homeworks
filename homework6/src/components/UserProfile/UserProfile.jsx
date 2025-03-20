import styles from "./UserProfile.module.css"

import { useState, useEffect } from "react";
import axios from "axios";

const users = {
    name: '',
    picture: null,
    email: '',
    phone: ''
}


const UserProfile = () => {
    const [user, setUser] = useState(users);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('https://randomuser.me/api');
            const userData = data.results[0];
            setUser({
                name: userData.name.first,
                picture: userData.picture.large,
                email: userData.email,
                phone: userData.phone
            })

        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div className={styles.container}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Loading...</p>}
            <img className={styles.picture}  src={user.picture} alt={user.name} />
            <h1 className={styles.title}>{user.name}</h1>
            <p className={styles.text}>Email: {user.email}</p>
            <p className={styles.text}>Phone: {user.phone}</p>
            <button className={styles.btn} onClick={fetchUser} >Load New User</button>

        </div>
    )
}
export default UserProfile;

