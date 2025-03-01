import "./ListsComponent.css"

const ListsComponent = () => {
    return (
            <div>
                <h2>Компонент с упорядоченным и неупорядоченным списками</h2>
                <ol>
                    <li>Элемент 1</li>
                    <li>Элемент 2</li>
                    <li>Элемент 3</li>
                </ol>
                <ul>
                    <li>Первый элемент</li>
                    <li>Второй элемент</li>
                    <li>Третий элемент</li>
                </ul>
            </div>
    )
}
export default ListsComponent;