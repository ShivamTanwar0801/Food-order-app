import "./OrderItem.scss";
import { currencyFormatter } from "../util/formatting.js";

const OrderItem = (props) => {
  return (
    <div className="order">
      <div className="customer">
        <h2>ORDER #{props.customer.orderId}</h2>

        <div>
          <p>
            Name : {props.customer.name} ({props.customer.email})
          </p>
          <p>
            Address : {props.customer.street}, {props.customer.city},{" "}
            {props.customer.postalcode}
          </p>
        </div>
      </div>
      <div className="orderdetails">
        <ul>
          {props.items.map((item) => (
            <li key={Math.random().toString()}>
              <p>
                {item.name} - {item.quantity} x{" "}
                {currencyFormatter.format(item.price)}
              </p>
            </li>
          ))}
        </ul>
        <span>Total : {currencyFormatter.format(props.customer.total)}</span>
      </div>
    </div>
  );
};

export default OrderItem;
