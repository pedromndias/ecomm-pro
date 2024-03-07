// In order to access the global state in this component, we need the useSelector hook:
import { useSelector } from "react-redux"

const Header = () => {

    // Make use of the useSelector:
    const result = useSelector((state) => state.cartData)
    console.log("Data in Header ", result);

    return <div className="header">
        <div className="cart-div">
            <span>{result.length}</span>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
        </div>
    </div>
}

export default Header