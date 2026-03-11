import React, { useState } from "react";
// Importing the 5 components from the components folder
import Button from "../components/Button";
import TextField from "../components/Textfield";
import Select from "../components/Select";
import Rating from "../components/Rating";
import Checkbox from "../components/Checkbox";

function Home() {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("Light");
  const [showWidgets, setShowWidgets] = useState(true);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Welcome Home</h1>
      <p>Customize your dashboard settings using the components below.</p>

      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        <h3>Dashboard Settings</h3>

        {/* Component 1: TextField */}
        <TextField 
          label="Dashboard Name" 
          placeholder="e.g. My Workspace" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />

        {/* Component 2: Select */}
        <Select 
          label="Theme Mode" 
          options={["Light", "Dark", "High Contrast"]} 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)} 
        />

        {/* Component 3: Checkbox */}
        <Checkbox 
          label="Show Quick Stats Widgets" 
          checked={showWidgets} 
          onChange={(e) => setShowWidgets(e.target.checked)} 
        />

        {/* Component 4: Rating */}
        <Rating label="Rate the new layout" />

        {/* Component 5: Button */}
        <Button 
          text="Save Settings" 
          onClick={() => alert(`Settings Saved!\nName: ${username}\nTheme: ${theme}`)} 
        />
      </div>
    </div>
  );
}

export default Home;