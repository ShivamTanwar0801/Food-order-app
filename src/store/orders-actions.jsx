import { ordersAction } from ".";
import Error from "../components/Error";

const fetchOrdersData = () => {
  return async (dispatch) => {
    const fetchOrders = async () => {
      const response = await fetch(
        "https://food-order-app-dd681-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch Orders");
      }

      const data = await response.json();

      return data;
    };

    try {
      const orders = await fetchOrders();
      if (orders === null) {
        return;
      }
      dispatch(ordersAction.replaceOrders(orders));
    } catch (error) {
      <Error title={"Failed to fetch Orders"} message={error.message} />;
    }
  };
};

export default fetchOrdersData;
