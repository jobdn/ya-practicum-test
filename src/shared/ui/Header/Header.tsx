import { Link } from "react-router-dom";
import { clsx } from "clsx";

import styles from "./Header.module.css";
import Logo from "./assets/logo.png";

type Props = {
  className: string;
};

export const Header = (props: Props) => {
  const { className } = props;

  return (
    <header className={clsx(styles.header, className)}>
      <Link to={"./"}>
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className={styles.menu}>
        <ul>
          <Link to={"/"} className={styles.menuItem}>
            Домой
          </Link>
          <Link to={"/js"} className={styles.menuItem}>
            Сила JS
          </Link>
        </ul>
      </nav>
    </header>
  );
};
