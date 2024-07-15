import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg";
import "./OrdersPage.scss";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";

const OrdersPage = () => {
  const navigate = useNavigate();

  const orders = useSelector((state) => state.orders.orders);

  return (
    <>
      <div
        className="header"
        onClick={() => {
          navigate("/home");
        }}
      >
        <header className="title">
          <img src={logoImg} alt="A restaurant" />
          <h1>ReactFood</h1>
        </header>
      </div>
      {orders.length === 0 ? (
        <p className="noorders">No Orders Found!</p>
      ) : (
        <div className="orders">
          <ul className="orderslist">
            {orders.map((order) => (
              <OrderItem
                customer={order.customer}
                items={order.items}
                key={order.customer.orderId}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default OrdersPage;
