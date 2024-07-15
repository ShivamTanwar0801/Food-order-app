import Cart from "../components/Cart.jsx";
import Checkout from "../components/Checkout.jsx";
import Header from "../components/Header.jsx";
import Meals from "../components/Meals.jsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
    </>
  );
};

export default HomePage;
