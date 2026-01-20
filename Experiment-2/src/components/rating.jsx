import { useState } from "react";
const Rating = ({ label }) => {
  const [rating, setRating] = useState(0);
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>{label}</label>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} onClick={() => setRating(star)} style={{ cursor: "pointer", fontSize: "24px", color: star <= rating ? "gold" : "#ccc" }}>★</span>
      ))}
    </div>
  );
};
export default Rating;