const TextField = ({ label, value, onChange, placeholder }) => (
  <div style={{ marginBottom: "15px" }}>
    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>{label}</label>
    <input type="text" value={value} onChange={onChange} placeholder={placeholder} style={{ width: "100%", padding: "8px" }} />
  </div>
);
export default TextField;