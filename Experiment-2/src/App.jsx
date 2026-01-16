import { Container, Typography, Stack, Divider, Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ButtonComponent from "./components/Button";
import RatingComponent from "./components/rating";
import SelectComponent from "./components/select";
import SwitchComponent from "./components/switch";
import TextFieldComponent from "./components/textfield";

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Material UI Components Demo
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mb: 3,
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography sx={{ cursor: "pointer" }}>Home</Typography>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography sx={{ cursor: "pointer" }}>About</Typography>
          </Link>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
          </Link>
        </Box>

        <Divider />

        <Stack spacing={3} mt={3}>
          {/* Experiment-2 Components (Always Visible) */}
          <ButtonComponent />
          <RatingComponent />
          <SelectComponent />
          <SwitchComponent />
          <TextFieldComponent />
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;