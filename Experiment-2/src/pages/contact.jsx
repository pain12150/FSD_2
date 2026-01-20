import React, { useState } from "react";
// Importing the 5 components
import Button from "../components/Button";
import TextField from "../components/Textfield";
import Select from "../components/Select";
import Rating from "../components/Rating";
import Checkbox from "../components/Checkbox";

function Contact() {
  const [message, setMessage] = useState("");
  const [queryType, setQueryType] = useState("General");
  const [urgent, setUrgent] = useState(false);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p>Have a question? Reach out to our team directly.</p>

      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        <h3>Send a Message</h3>

        {/* Component 1: Select */}
        <Select 
          label="Query Type" 
          options={["General Inquiry", "Technical Support", "Billing Issue"]} 
          value={queryType} 
          onChange={(e) => setQueryType(e.target.value)} 
        />

        {/* Component 2: TextField */}
        <TextField 
          label="Your Message" 
          placeholder="Type your message here..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />

        {/* Component 3: Checkbox */}
        <Checkbox 
          label="Mark as Urgent Priority" 
          checked={urgent} 
          onChange={(e) => setUrgent(e.target.checked)} 
        />

        {/* Component 4: Rating */}
        <Rating label="Rate our support speed (if applicable)" />

        {/* Component 5: Button */}
        <Button 
          text="Send Message" 
          onClick={() => alert("Message Sent Successfully!")} 
        />
      </div>
    </div>
  );
}

export default Contact;