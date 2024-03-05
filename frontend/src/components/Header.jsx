import "../styles/global.sass";
import logo from "../images/shop.png"

import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../AuthContext";


const Header = () => {
  const { isConnected, logout, isAdmin } = useAuth();
  return (
    <header>
      <div className="logo-link">
        <img src={logo} alt="logo" width={70} height={70}/>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/about">About us</a>
          </li>
          <li>
          {isConnected ? (
            <a href="/" onClick={(e) => { e.preventDefault(); logout(); }}>Logout</a>
          ) : (
            <a href="/signup">Sign in</a>
          )}
          </li>
        </ul>
      </div>
      <div className="cart">
        <a href="/cart">
          <FaShoppingCart size={30} />
          <p>Cart</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
