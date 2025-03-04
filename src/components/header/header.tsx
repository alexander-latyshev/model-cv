import { useState, useEffect } from "react";
import LanguageDropdown from "../languageDropdown/languageDropdown";
import NavBar from "../navbar/navBar";
import { motion } from "framer-motion";
import "./header.scss";
import navData from "../../data/navigation.json";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Header = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="header container"
      initial={{ y: 0 }}
      animate={{ y: scrollingDown ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="header__wrapper">
        <NavBar
          items={navData?.routes[language]}
          pathname={location.pathname}
        />
        <LanguageDropdown />
      </div>
    </motion.header>
  );
};

export default Header;
