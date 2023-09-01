import { Link } from "react-router-dom";
import { clsx } from "clsx";

import styles from "./Header.module.css";
import Logo from "./assets/logo.png";

type Props = {
  className?: string;
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
          <li className={styles.menuItem}>
            <Link to="/">Домой</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/js">Сила JS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
