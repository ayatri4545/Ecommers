import React, { useEffect, useState } from "react";
import './Cart.css'
const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  function handlePrice() {
    let ans = 0;
    cart.map((item) => (ans += item.price * item.amount));
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice();
  }, [cart]);

  function handleRemove(id) {
    const del = cart.filter((item) => item.id !== id);
    setCart(del);
  }

  function handleIncrement(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
  }

  function handleDecrement(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );
    setCart(updatedCart);
  }

  return (
    <div className="Cart">
      <table width={"100%"} border={"1"} rules="all">
        <thead>
          <tr>
            <td>
              <b>Image</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Price</b>
            </td>
            <td>
              <b>Incre</b>
            </td>
            <td>
              <b>Qty</b>
            </td>
            <td>
              <b>Decre</b>
            </td>
            <td>
              <b>Remove</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    height={"100px"}
                    width={"100px"}
                    alt=""
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button className="in" onClick={() => handleIncrement(item.id)}>+</button>
                </td>
                <td>{item.amount}</td>
                <td>
                  <button className="de" onClick={() => handleDecrement(item.id)}>-</button>
                </td>
                <td>
                  <button className="re" onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={"2"}>
              <b>Total</b>
            </td>
            <td>
              <b>{price}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
