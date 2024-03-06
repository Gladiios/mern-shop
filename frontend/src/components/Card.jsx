import socket from "../images/socket.jpg"
import { useCart } from "../CartContext";


const Card = ({product}) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img
        src={socket}
        alt="product picture"
      />
      <div>
        <h2>Product Name</h2>
        <p>Price</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Card;
