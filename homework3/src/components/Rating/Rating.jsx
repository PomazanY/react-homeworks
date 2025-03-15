import styles from './Rating.module.css'
import ratingList from '../Rating/ratingList'

import { useState } from 'react';


const Rating = () => {
    const [ratingValue, setRatingValue] = useState(0);

    const handleClick = (value) => {
        setRatingValue(value)
    }

    return (
        <div className={styles.container}>
            <img className={styles.smile} src={ratingList[ratingValue]} alt={`Rating ${ratingValue}`}  />
            <div>
                <button onClick={() => handleClick(0)} className={styles.btn}>Bad</button>
                <button onClick={() => handleClick(1)} className={styles.btn}>Okay</button>
                <button onClick={() => handleClick(2)} className={styles.btn}>Good</button>
                <button onClick={() => handleClick(3)} className={styles.btn}>Well</button>
            </div>
        </div>
    )
}
export default Rating;