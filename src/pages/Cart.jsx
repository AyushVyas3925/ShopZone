import React from 'react'
import { useCart } from '../context/CartContext'

function Cart() {
    const { cart, removeFromCart } = useCart()


    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your Cart is Empty!</h2>
    }

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Shopping Cart</h1>


            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {cart.map(item => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #444", padding: "15px", borderRadius: "10px", background: "#1a1a1a" }}>

                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <img src={item.thumbnail} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price} x {item.quantity}</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ background: "red", color: "white", padding: "5px 10px", borderRadius: "5px" }}
                            >
                                Remove
                            </button>
                        </div>

                    </div>
                ))}
            </div>


            <div style={{ marginTop: "30px", textAlign: "right", borderTop: "2px solid #444", paddingTop: "15px" }}>
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <button style={{ background: "green", color: "white", padding: "15px 30px", fontSize: "1.2rem", marginTop: "10px" }}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart