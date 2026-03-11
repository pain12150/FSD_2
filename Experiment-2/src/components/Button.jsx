const Button = ({ text, onClick }) => (
  <button onClick={onClick} style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>
    {text}
  </button>
);
export default Button;