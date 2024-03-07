
// Let's import the action file:
import {addToCart} from "../redux/action"
// We can't call addToCart directly from the button, so we need the useDispatch hook:
import { useDispatch } from "react-redux"


function Main() {
  // Now we create a variable for our dispatch so we can call it in the onClick button event:
  const dispatch = useDispatch()
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
    </div>
  );
}

export default Main;