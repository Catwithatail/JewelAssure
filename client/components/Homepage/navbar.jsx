import React from "react";
import styles from "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/verify">Verify</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/* <Link href={"/login"}>
        <button className={styles.sign}>Sign In</button>
      </Link> */}
    </nav>
  );
};

export default Navbar;
