import { useState } from 'react';
import styles from '../styles/login.module.css';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../hooks/useProvideAuth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [signingUp, setSigningUp] = useState('');
  const auth = useAuth();
  //   const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);

    let error = false;

    if (!name || !email || !password || !confirmpassword) {
      toast.error('Please enter your responses in all the field');
      error = true;
    }

    if (password !== confirmpassword) {
      toast.error('Make sure your password matches!');
      error = true;
    }

    if (error) {
      return setSigningUp(false);
    }

    // const response = await auth.;
  };
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Sign Up</span>
        <div className={styles.field}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <button>Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
