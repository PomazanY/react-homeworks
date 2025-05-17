import { useSelector, useDispatch } from "react-redux";

import { selectQueto } from "../../redux/queto/queto-selector";
import { useEffect } from "react";
import { fetchQueto } from "../../redux/queto/queto-thunk";


// import styles from "./QuetoList.module.css"

const QuetoList = () => {

    const { queto, author, loading, error } = useSelector(selectQueto);
    const dispatch = useDispatch();
     
    
    useEffect(() => {
        dispatch(fetchQueto())
    }, [dispatch])

    const handleNewQuote = () => {
        dispatch(fetchQueto());
    };


    return (
        <>
            <h2>QuetoList</h2>
            <p>{queto}</p>
            <p>{author}</p>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleNewQuote}> New Queto</button>
        </>
    )
};
export default QuetoList;