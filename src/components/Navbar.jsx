import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

function Navbar() {
    const { cart } = useCart()
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <nav style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "rgba(18, 18, 18, 0.8)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "15px 0"
        }}>
            <div className="app-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                {/* Logo */}
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <ShoppingBag color="#646cff" size={28} />
                    <span style={{ fontSize: "1.5rem", fontWeight: "bold", background: "linear-gradient(to right, #fff, #aaa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        ShopZone
                    </span>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    <Link to="/" style={{ color: "#eee", fontWeight: "500" }}>Home</Link>
                    <Link to="/shop" style={{ color: "#eee", fontWeight: "500" }}>Shop</Link>
                    <Link to="/contact" style={{ color: "#eee", fontWeight: "500" }}>Contact</Link>

                    {/* Cart Button */}
                    <Link to="/cart" style={{ position: "relative" }}>
                        <div style={{
                            background: totalItems > 0 ? "linear-gradient(135deg, #646cff, #747bff)" : "#333",
                            padding: "10px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s"
                        }}>
                            <ShoppingCart size={20} color="white" />
                        </div>
                        {totalItems > 0 && (
                            <span style={{
                                position: "absolute",
                                top: "-5px",
                                right: "-5px",
                                background: "#ff4757",
                                color: "white",
                                fontSize: "0.75rem",
                                fontWeight: "bold",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px solid #121212"
                            }}>
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar