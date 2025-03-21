import { useState, useEffect } from "react";
import { IRoute } from "../../models/navigation";
import NavItem from "./navItem";

type Props = {
  items: Array<IRoute>;
  pathname: string;
};

const NavBar = (props: Props) => {
  const { items, pathname } = props;
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "visible";
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
        {items.map((el: IRoute, idx) => {
          return (
            <NavItem
              name={el.name}
              path={el.path}
              key={idx}
              isSelected={pathname === el.path}
              closeMenu={() => setMenuActive(false)}
            />
          );
        })}
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default NavBar;
