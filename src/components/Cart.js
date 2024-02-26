import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import CategoryItemList from "./CategoryItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="m-4 p-4">
      <h1 className="font-semibold text-2xl text-center">Cart</h1>
      <div className="w-6/12 m-auto text-center mt-5">
        <button className="bg-black rounded-lg text-white p-2" onClick={handleClearCart}>Clear cart</button>
      </div>

      <div className="w-6/12 m-auto">
        <CategoryItemList items={cartItems} inCart={true}/>
      </div>
    </div>
  );
};

export default Cart;
