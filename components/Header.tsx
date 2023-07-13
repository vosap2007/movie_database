// import styles from "./page.module.css";

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">All Movies</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
