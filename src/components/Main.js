// ?

// Let's import the actions from the action file:
import { useEffect } from "react"
import {addToCart, emptyCart, removeFromCart} from "../redux/action"
import { productList } from "../redux/productAction"

// We can't call addToCart, etc directly from the buttons, so we need the useDispatch hook:
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


function Main() {
  // Now we create a variable for our dispatch so we can call it in the onClick button events:
  const dispatch = useDispatch()

  // And useSelector to get the product list (it will cause re-render everytime there is a change in the state)
  let data = useSelector(state=>state.productData)
  console.log("Data in main component: ", data);

  // Let's use a useEffect so the productList is dispatch when we render this component:
  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button> */}
      {/* <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </div> */}
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div> */}
      <div className="product-container">
        {data.map((item) => {
          return <div key={item.id} className="product-item">
            <img src={item.photo} alt={item.name}/>
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Price : ${item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Main;