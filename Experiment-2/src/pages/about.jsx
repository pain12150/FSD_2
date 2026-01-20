import React, { useState } from "react";
// Importing the 5 components
import Button from "../components/Button";
import TextField from "../components/Textfield";
import Select from "../components/Select";
import Rating from "../components/Rating";
import Checkbox from "../components/Checkbox";

function About() {
  const [feedback, setFeedback] = useState("");
  const [role, setRole] = useState("Student");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>About Us</h1>
      <p>We are dedicated to learning React architecture. Help us improve by filling out this survey.</p>

      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        <h3>Visitor Survey</h3>

        {/* Component 1: Select */}
        <Select 
          label="I am a..." 
          options={["Student", "Developer", "Recruiter", "Other"]} 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
        />

        {/* Component 2: Rating */}
        <Rating label="How do you like our website?" />

        {/* Component 3: TextField */}
        <TextField 
          label="Suggestions" 
          placeholder="What should we add next?" 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
        />

        {/* Component 4: Checkbox */}
        <Checkbox 
          label="Subscribe to our dev blog" 
          checked={newsletter} 
          onChange={(e) => setNewsletter(e.target.checked)} 
        />

        {/* Component 5: Button */}
        <Button 
          text="Submit Feedback" 
          onClick={() => alert("Thank you for your feedback!")} 
        />
      </div>
    </div>
  );
}

export default About;