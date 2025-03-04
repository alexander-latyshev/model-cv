import { Link } from "react-router-dom";
import { IRoute } from "../../models/navigation";

interface Props extends IRoute {
  isSelected: boolean;
  closeMenu: () => void;
}

const NavItem = ({ path, name, isSelected, closeMenu }: Props) => {
  return (
    <Link className={isSelected ? "active" : ""} to={path} onClick={closeMenu}>
      {name}
    </Link>
  );
};

export default NavItem;
