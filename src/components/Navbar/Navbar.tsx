import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" || location.pathname === "/events" ? (
        null
      ) : (
        <nav className={styles.navBar}>
          <NavLink to="/events">View all events</NavLink>
        </nav>
      )}
    </>
  );
};

export default Navbar;
