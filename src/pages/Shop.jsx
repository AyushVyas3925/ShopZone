import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

function Shop() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching products:', err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="fade-in" style={{ padding: '40px', textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", color: "#666" }}>Loading Collection...</h2>
            </div>
        )
    }

    return (
        <div className="fade-in" style={{ padding: '20px 0 60px 0' }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "linear-gradient(to right, #fff, #aaa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Curated Collection
                </h1>
                <p style={{ color: "#888", fontSize: "1.1rem" }}>Handpicked quality for the modern lifestyle.</p>
            </div>

            <div className="product-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '30px'
            }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        background: "#1e1e1e",
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: "1px solid #333",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column"
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-10px)"
                            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)"
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "translateY(0)"
                            e.currentTarget.style.boxShadow = "none"
                        }}
                    >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit", flex: 1 }}>
                            <div style={{ position: "relative", height: "250px", overflow: "hidden" }}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    background: "rgba(0,0,0,0.6)",
                                    color: "white",
                                    padding: "4px 10px",
                                    borderRadius: "20px",
                                    fontSize: "0.8rem",
                                    backdropFilter: "blur(4px)"
                                }}>
                                    {product.category}
                                </div>
                            </div>

                            <div style={{ padding: "20px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                                    <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600", color: "#eee" }}>
                                        {product.title}
                                    </h3>
                                    <span style={{ fontWeight: "bold", color: "#646cff", fontSize: "1.1rem" }}>
                                        ${product.price}
                                    </span>
                                </div>
                                <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
                                    {product.description.substring(0, 60)}...
                                </p>
                            </div>
                        </Link>

                        <div style={{ padding: "0 20px 20px 20px" }}>
                            <Link to={`/product/${product.id}`} style={{ display: "block" }}>
                                <button style={{
                                    width: "100%",
                                    padding: "12px",
                                    background: "#333",
                                    color: "white",
                                    borderRadius: "8px",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    transition: "background 0.2s"
                                }}
                                    onMouseEnter={e => e.currentTarget.style.background = "#444"}
                                    onMouseLeave={e => e.currentTarget.style.background = "#333"}
                                >
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop