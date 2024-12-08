import React from 'react'
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        ma: "",
        email: "",
        password: "",
      });
    
      const [message, setMessage] = useState("");
    
      const validateInput = () => {
        const { ma, email, password } = formData;
    
        // Validate "ma"
        if (!ma) {
          return "Mã không được để trống";
        }
        if (!ma.startsWith("NV")) {
          return "Mã không đúng định dạng";
        }
        if (ma.length < 8) {
          return "Mã không được nhỏ hơn 8 ký tự";
        }
        if (ma.length > 16) {
          return "Mã không được lớn hơn 16 ký tự";
        }
    
        // Validate "email"
        if (!email) {
          return "Email không được để trống";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return "Email không đúng định dạng";
        }
    
        // Validate "password"
        if (password.length < 8) {
          return "Mật khẩu không được nhỏ hơn 8 ký tự";
        }
    
        return "Đăng ký thành công";
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationMessage = validateInput();
        setMessage(validationMessage);
      };
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Form Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Mã:
            <input
              type="text"
              name="ma"
              value={formData.ma}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Mật khẩu:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Đăng ký
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "20px",
            color: message === "Đăng ký thành công" ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  )
}
