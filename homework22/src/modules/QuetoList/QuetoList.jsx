import { useSelector, useDispatch } from "react-redux";

import { selectQueto } from "../../redux/queto/queto-selector";
// import { useEffect } from "react";
import { fetchQueto } from "../../redux/queto/queto-thunk";
import { useEffect } from "react";

import { getQuetoApi } from "../../shared/api/queto-api";

// import styles from "./QuetoList.module.css"

const QuetoList = () => {

    const { id, url, loading, error } = useSelector(selectQueto);
    const dispatch = useDispatch();
    console.log(id);
    console.log(url);

    useEffect(() => {
        const fetch = async ()=>{
            const data = await getQuetoApi()
            console.log(data);
            return data;
        }
        fetch()
        
    }, [])
    
    
    // useEffect(() => {
    //     dispatch(fetchQueto())
    // }, [dispatch])

    const handleNewQuote = () => {
        dispatch(fetchQueto());
    };


    return (
        <>
            <h2>QuetoList</h2>
            <p>{id}</p>
            <p>{url}</p>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleNewQuote}> New Queto</button>
        </>
    )
};
export default QuetoList;