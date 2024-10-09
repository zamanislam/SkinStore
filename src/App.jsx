import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AuthNavbar } from "./components/AuthNavbar"; // Import the new AuthNavbar

function Layout() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <Box w="98vw" minH="100vh" overflowX="hidden">
      
      {isAuthPage ? <AuthNavbar /> : <Navbar />}
      <AppRoutes/>
      {!isAuthPage && <Footer />}
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Layout />
      </Router>
    </ChakraProvider>
  );
}

export default App;