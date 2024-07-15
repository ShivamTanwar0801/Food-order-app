import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { Provider } from "react-redux";
import store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProgressContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserProgressContextProvider>
    </Provider>
  </React.StrictMode>
);
