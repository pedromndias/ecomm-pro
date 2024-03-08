// In order to access the global state in this component, we need the useSelector hook:
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Header = () => {

    // Make use of the useSelector:
    const result = useSelector((state) => state.cartData)
    console.log("Data in Header ", result);

    return <div className="header">
        <Link to="/">
            <h1 className="logo">E-Comm</h1>
        </Link>
        <Link to="/cart">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
            </div>
        </Link>
    </div>
}

export default Header