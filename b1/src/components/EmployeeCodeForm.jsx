import React, { useState } from 'react'

export default function EmployeeCodeForm() {
    const [employeeCodes, setEmployeeCodes] = useState([
        "EMP001",
        "EMP002",
        "EMP003",
        "EMP004",
        "EMP005",
      ]);
    

      const [inputValue, setInputValue] = useState("");
      const [message, setMessage] = useState("");
    

      const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") {
          setMessage("Mã nhân viên không được để trống.");
          return;
        }
    
        if (employeeCodes.includes(inputValue.trim())) {
          setMessage("Mã nhân viên đã tồn tại trong hệ thống.");
          return;
        }
    
        setEmployeeCodes([...employeeCodes, inputValue.trim()]);
        setMessage("Thêm mã nhân viên thành công.");
        setInputValue(""); 
      };
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Thêm Mã Nhân Viên</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập mã nhân viên"
            style={{ padding: "10px", width: "100%" }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Thêm
        </button>
      </form>
      {message && (
        <div style={{ marginTop: "10px", color: "red" }}>{message}</div>
      )}
    </div>
  )
}
