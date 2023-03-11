import styles from '../styles/login.module.css';

const SignUp = () => {
  return (
    <form className={styles.loginForm}>
      <span className={styles.loginSignupHeader}>Sign Up</span>
      <div className={styles.field}>
        <input type="text" placeholder="First Name" />
      </div>
      <div className={styles.field}>
        <input type="text" name="" id="" placeholder="Last Name" />
      </div>
      <div className={styles.field}>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className={styles.field}>
        <input type="password" name="" id="" placeholder="Password" />
      </div>
      <div className={styles.field}>
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
