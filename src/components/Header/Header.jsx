import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const setActive = ({ isActive }) => isActive ? styles.header__link_active : styles.header__link;

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.header__linkList}>
          <li className={styles.header__linkItem}><NavLink to='/home' className={setActive}>Home</NavLink>{'>'}</li>
          <li className={styles.header__linkItem}><NavLink to='/sub-page 2' className={setActive}>Sub Page 2</NavLink></li>
          <li className={styles.header__linkItem}><NavLink to='/sub-page 3' className={setActive}>Sub Page 2</NavLink></li>
          <li className={styles.header__linkItem}><NavLink to='/sub-page 4' className={setActive}>Sub Page 2</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
