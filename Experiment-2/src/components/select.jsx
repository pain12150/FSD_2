const Select = ({ label, options, value, onChange }) => (
  <div style={{ marginBottom: "15px" }}>
    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>{label}</label>
    <select value={value} onChange={onChange} style={{ width: "100%", padding: "8px" }}>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);
export default Select;