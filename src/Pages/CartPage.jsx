import { useSelector } from "react-redux";
import CartList from "../components/CartList/CartList";
import CartSummary from "../components/CartSummary/CartSummary";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";
import { RiEmotionSadFill } from "react-icons/ri";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-full gap-x-5 py-10 flex flex-col lg:flex-row-reverse">
      {cart.products.length === 0 && (
        <section className="col-span-3 w-full text-center border border-gray-200 rounded-lg p-10">
          <h2 className="text-violet-700">
            Your cart is empty{" "}
            <RiEmotionSadFill className="inline mb-1" size={36} />
          </h2>
          <Link
            to="/store"
            className="link link-primary link-hover flex text-xl justify-center items-center mt-10"
          >
            <p className="pt-3">Let's go shop now !</p>
            <FcShop size={100} />
          </Link>
        </section>
      )}
      {cart.products.length > 0 && (
        <>
          <section className="lg:col-span-1 mb-5">
            <CartSummary cart={cart} />
          </section>
          <section className="lg:col-span-2">
            <CartList cart={cart} />
          </section>
        </>
      )}
    </div>
  );
};

export default CartPage;
