import './ShoppingList.css'

const ShoppingList = ({ items = [] }) => {
    if (!items?.length) {
        return <p>Список покупок пуст</p>
    }
    const elements = items.map(item =>
        <li key={item.id}>
            <h2>Name: {item.name}</h2>
            <p>Type: {item.type}</p>
        </li>)
    return (
        <ul>
            {elements}
        </ul>
    )
};

export default ShoppingList;