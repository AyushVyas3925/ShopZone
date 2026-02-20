import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function Contact() {
    return (
        <div className="fade-in" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "linear-gradient(to right, #fff, #aaa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Contact Us
                </h1>
                <p style={{ color: "#888", fontSize: "1.1rem" }}>We'd love to hear from you. Please fill out this form.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>

                {/* Contact Info */}
                <div style={{
                    background: "#1e1e1e",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid #333",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <h2 style={{ fontSize: "1.5rem", marginTop: 0 }}>Get in Touch</h2>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#ccc" }}>
                        <Mail color="#646cff" />
                        <span>support@shopzone.com</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#ccc" }}>
                        <Phone color="#646cff" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "#ccc" }}>
                        <MapPin color="#646cff" />
                        <span>123 Commerce St, Tech City</span>
                    </div>
                </div>

                {/* Form */}
                <div style={{
                    background: "#1e1e1e",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid #333",
                }}>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", marginBottom: "8px", color: "#ccc" }}>Name</label>
                            <input type="text" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #444", background: "#121212", color: "white", boxSizing: "border-box", outline: "none" }} required placeholder="John Doe" />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", marginBottom: "8px", color: "#ccc" }}>Email</label>
                            <input type="email" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #444", background: "#121212", color: "white", boxSizing: "border-box", outline: "none" }} required placeholder="john@example.com" />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", marginBottom: "8px", color: "#ccc" }}>Message</label>
                            <textarea rows="4" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #444", background: "#121212", color: "white", boxSizing: "border-box", resize: "vertical", outline: "none" }} required placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%" }}>
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
