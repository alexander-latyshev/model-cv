import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useEffect } from "react";
import { PORTFOLIO_ROUTE } from "./consts";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(PORTFOLIO_ROUTE);
    }
  }, []);

  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
}

export default App;
