import { useState } from 'react';
import styles from '../styles/login.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../hooks/useProvideAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLogginIn] = useState(false);
  const auth = useAuth();
  console.log(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLogginIn(true);

    if (!email || !password) {
      toast.error('Please enter both email and password');
      setLogginIn(false);
      return;
    }

    const response = await auth.login(email, password);

    if (response.success) {
      toast.success('Successfully LoggedIn!');
    } else {
      toast.error(response.message);
    }

    setLogginIn(false);
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Log In</span>

        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <button disabled={loggingIn}>
            {loggingIn ? 'Logging In...' : 'Log In'}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
