import "./OrderStatus.css"

const OrderStatus =({items})=>{
    const elements = items.map(item => <p key={item.orderId}>Заказ №{item.orderId}: {item.status}</p>)
    return (
        <div>
            {elements}
        </div>
    )
}
export default OrderStatus;