import { useState, useEffect } from "react";

const ListItems = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => setInputValue(e.target.value)

    const addItem = () => {
        if (inputValue === '') return;
        setItems([...items, inputValue]);
        setInputValue('')

    }
    const elements = items.map(item => <li key={item}>{item}</li>)

    useEffect(() => {
        console.log('Компонент ListItems обновлен')
    },[]);

    return (
        <div>
            <input type="text" placeholder="Введите элемент" value={inputValue} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
            <ul>
                {elements}
            </ul>
        </div>

    )
}
export default ListItems;