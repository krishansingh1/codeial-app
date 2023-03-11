import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useProvideAuth';

const Navbar = () => {
  const auth = useAuth();
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </Link>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.user}>
          <a href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              className={styles.userDp}
            />
          </a>
          <span>Krishan</span>
        </div>

        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <a href="/">Log out</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
