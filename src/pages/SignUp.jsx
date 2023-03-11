import styles from '../styles/login.module.css';

const SignUp = () => {
  return (
    <form className={styles.loginForm}>
      <span className={styles.loginSignupHeader}>Sign Up</span>
      <div>
        <input type="text" placeholder="First Name" />
      </div>
      <div>
        <input type="text" name="" id="" placeholder="Last Name" />
      </div>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="" id="" placeholder="Password" />
    </form>
  );
};

export default SignUp;
