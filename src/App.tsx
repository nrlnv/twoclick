import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import { Box } from "@mui/material";
import { containerSx, mainContainerSx } from "./app.style";
import { Soon } from "./pages/Soon";

const App = () => {
  return (
    <Box sx={containerSx}>
      <Header />
      <Box sx={mainContainerSx}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soon" element={<Soon />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
