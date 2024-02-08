import socket from "../images/socket.jpg"

const Card = () => {
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
      <button>Add to cart</button>
    </div>
  );
};

export default Card;
