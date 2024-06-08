import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { PiLineVertical } from "react-icons/pi";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">Savorelle</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/products">Catalog</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!loggedIn && (
          <div className={styles.authMenu}>
            <Link to='/signup' className={styles.authLink}>Register</Link>
            <PiLineVertical style={{fontSize:'30px'}}/>
            <Link to='/signin' className={styles.authLink}>Login</Link>
          </div>
        )}
        {loggedIn && (
          <>
            {items.length > 0 && (
              <Link to="/basket">
                <Button colorScheme="white" variant="outline">
                  Basket ({items.length})
                </Button>
              </Link>
            )}

            {user?.role === "admin" && (
              <Link to="/admin">
                <Button colorScheme="white" variant="outline" mr="5px" >
                  Admin
                </Button>
              </Link>
            )}

            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
