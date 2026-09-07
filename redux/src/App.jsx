import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart
} from "./redux/cartSlice";

import "./App.css";

function App() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000
    }
  ];

  let totalAmount = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalAmount += cartItems[i].price;
  }

  return (
    <div className="container">

      <h1>Shopping Cart Management System</h1>

      <h2>Products</h2>

      <div className="products">

        {
          products.map((product) => (

            <div className="card" key={product.id}>

              <h3>{product.name}</h3>

              <p>Price: ₹{product.price}</p>

              <button
                onClick={() =>
                  dispatch(addToCart(product))
                }
              >
                Add To Cart
              </button>

            </div>

          ))
        }

      </div>

      <hr />

      <h2>Shopping Cart</h2>

      <h3>Items in Cart: {cartItems.length}</h3>

      <h3>Total Amount: ₹{totalAmount}</h3>

      <div className="cart">

        {
          cartItems.length === 0 ? (
            <p>Cart is Empty</p>
          ) : (

            cartItems.map((item) => (

              <div className="card" key={item.id}>

                <h3>{item.name}</h3>

                <p>Price: ₹{item.price}</p>

                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Remove
                </button>

              </div>

            ))

          )
        }

      </div>

    </div>
  );
}

export default App;
