import React, { useState } from 'react'

export default function EmployeeForm() {
    const [employeeCode, setEmployeeCode] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error
    setError("");

    // Validation
    if (!employeeCode) {
      setError("Mã nhân viên không được để trống");
      return;
    }

    if (!employeeCode.startsWith("NV")) {
      setError("Mã nhân viên không đúng định dạng mời điền NV mã");
      return;
    }

    if (employeeCode.length < 8) {
      setError("Mã nhân viên không được ngắn hơn 8 ký tự");
      return;
    }

    if (employeeCode.length > 16) {
      setError("Mã nhân viên không được dài hơn 16 ký tự");
      return;
    }

    // Add employee code to the list
    setEmployeeList([...employeeList, employeeCode]);

    // Clear input field
    setEmployeeCode("");
  };
  return (
    <div className="container mt-4">
      <h1>Thêm Nhân Viên</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="employeeCode" className="form-label">
            Mã Nhân Viên
          </label>
          <input
            type="text"
            id="employeeCode"
            className={`form-control ${error ? "is-invalid" : ""}`}
            value={employeeCode}
            onChange={(e) => setEmployeeCode(e.target.value)}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>

      <div className="mt-4">
        <h2>Danh Sách Nhân Viên</h2>
        <ul className="list-group">
          {employeeList.map((code, index) => (
            <li key={index} className="list-group-item">
              {code}
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}
