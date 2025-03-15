import Greeting from "../../components/Greeting/Greeting"
import ShoppingList from "../../components/ShoppingList/ShoppingList"
import OrderStatus from "../../components/OrderStatus/OrderStatus"

import './App.css'

import goods from "../../data/goods-list"

const orders = [
  { orderId: 101, status: "обработан" },
  { orderId: 102, status: "в пути" },
  { orderId: 103, status: "доставлен" },
  { orderId: 104, status: "отменён" },
  { orderId: 105, status: "ожидает оплаты" }
];

function App() {
  const item = { name: 'John' }
  return (
    <>
      <p>ЗАДАНИЕ 1</p>
      <Greeting name={item.name} />
      <p>ЗАДАНИЕ 2</p>
      <ShoppingList items={goods} />
      <p>ЗАДАНИЕ 3</p >
      {orders.map(order => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </>
  )
}

export default App
