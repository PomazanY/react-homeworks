import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Button from "../../shared/components/Button/Button";

import { logoutUser } from "../../redux/auth/auth-thunks";


const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login"); 
    }

    return (
        <div>
            <PageTitle>Welcome!</PageTitle>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
};

export default Profile;