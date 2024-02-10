import "../styles/global.sass";
import logo from "../images/shop.png"

import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../AuthContext";

const Header = () => {
  const { isConnected, logout } = useAuth();
  return (
    <header>
      <div className="logo-link">
        <img src={logo} alt="logo" width={150} height={150}/>
        <ul>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          {isConnected ? (
            <a href="/" onClick={(e) => { e.preventDefault(); logout(); }}>Logout</a>
          ) : (
            <a href="/signup">Sign in</a>
          )}    
        </ul>
      </div>
      <div className="cart">
        <FaShoppingCart size={24} />
        <p>Cart</p>
      </div>
    </header>
  );
};

export default Header;
