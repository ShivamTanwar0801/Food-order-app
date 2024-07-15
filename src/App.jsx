import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import RootLayout from "./page/RootLayout.jsx";
import LoginPage from "./page/LoginPage.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchOrdersData from "./store/orders-actions.jsx";
import OrdersPage from "./page/OrdersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
        id: "login-loader",
        loader: () => {
          const loginStatus = localStorage.getItem("isLoggedIn");
          return loginStatus;
        },
      },
      { path: "/home", element: <HomePage /> },
    ],
  },
  { path: "/orders", element: <OrdersPage /> },
]);

function App() {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdersData());
  }, []);

  console.log(orders);

  useEffect(() => {
    if (orders.length === 0) {
      return;
    }
    const sendOrders = async () => {
      const response = await fetch(
        "https://food-order-app-dd681-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          method: "PUT",
          body: JSON.stringify(orders),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place Order!");
      }
    };

    sendOrders();
  }, [orders]);

  return <RouterProvider router={router} />;
}

export default App;
