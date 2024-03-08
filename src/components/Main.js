// ?

// Let's import the actions from the action file:
import {addToCart, emptyCart, removeFromCart} from "../redux/action"
import { productList } from "../redux/productAction"

// We can't call addToCart, etc directly from the buttons, so we need the useDispatch hook:
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


function Main() {
  // Now we create a variable for our dispatch so we can call it in the onClick button events:
  const dispatch = useDispatch()

  // And useSelector to get the product list:
  let data = useSelector(state=>state.productData)
  console.log("Data in main component: ", data);
  // And some data to pass it:
  const product = {
    name: "iPhone",
    category: "mobile",
    price: 1200,
    color: "red"
  }

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
    </div>
  );
}

export default Main;