
import styles from "./List.module.css"
import items from "./items";

import { useState } from "react";



const List = () => {
    const [people, setPeople] = useState(items);

    const deleteItem = (name) => {
        setPeople(prevPeople => {
            return prevPeople.filter(item => item.name !== name);
        })
    }
    const elements = people.map(item => (
        <div className={styles.card} key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <button onClick={()=> deleteItem(item.id)} >Delete</button>
        </div>
    ))
    return (
        <div className={styles.container}>
            {elements}
        </div>
    )
}
export default List;