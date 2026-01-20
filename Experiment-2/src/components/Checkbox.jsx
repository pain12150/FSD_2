const Checkbox = ({ label, checked, onChange }) => (
  <div style={{ marginBottom: "15px" }}>
    <label style={{ cursor: "pointer" }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ marginRight: "10px" }} />
      {label}
    </label>
  </div>
);
export default Checkbox;