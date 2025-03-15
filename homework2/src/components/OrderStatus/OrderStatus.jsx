import "./OrderStatus.css"

const OrderStatus =({orderId, status})=>{

    return (
        <div>
            Заказ №{orderId}: {status}
        </div>
    )
}
export default OrderStatus;