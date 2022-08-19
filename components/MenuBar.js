import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function MenuBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/doggies">
            <a>Doggies</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
