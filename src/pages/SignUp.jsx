import { useState } from 'react';
import styles from '../styles/login.module.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  return (
    <form className={styles.loginForm}>
      <span className={styles.loginSignupHeader}>Sign Up</span>
      <div className={styles.field}>
        <input type="text" placeholder="Name" />
      </div>
      <div className={styles.field}>
        <input type="email" placeholder="Email" />
      </div>
      <div className={styles.field}>
        <input type="password" placeholder="Password" />
      </div>
      <div className={styles.field}>
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div className={styles.field}>
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
