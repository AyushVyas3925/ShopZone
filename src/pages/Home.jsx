import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="fade-in" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            textAlign: "center",
            padding: "20px"
        }}>
            <h1 style={{
                fontSize: "4rem",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #ffffff 0%, #646cff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1.1"
            }}>
                Welcome to the Future <br /> of Shopping
            </h1>

            <p style={{ fontSize: "1.2rem", color: "#aaa", maxWidth: "600px", marginBottom: "40px" }}>
                Discover premium products, exclusive deals, and a seamless shopping experience designed just for you.
            </p>

            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/shop">
                    <button className="btn-primary" style={{ fontSize: "1.1rem", padding: "15px 40px" }}>
                        Shop Now
                    </button>
                </Link>
                <button style={{
                    background: "transparent",
                    border: "1px solid #444",
                    color: "white",
                    padding: "14px 40px",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    fontWeight: "600"
                }}>
                    Learn More
                </button>
            </div>

            {/* Background decoration elements */}
            <div style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                width: "200px",
                height: "200px",
                background: "#646cff",
                filter: "blur(150px)",
                opacity: "0.2",
                zIndex: -1
            }}></div>
        </div>
    )
}

export default Home