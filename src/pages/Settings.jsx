import styles from '../styles/settings.module.css';
import { useAuth } from '../hooks/useProvideAuth';
import { useState } from 'react';

const Settings = () => {
  const auth = useAuth();

  const [editMode, setEditMode] = useState(false);

  const handleInput = () => {
    setEditMode(!editMode);
    console.log(editMode);
    if (editMode === true) {
      Styles.display = { display: 'visible' };
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img src="" alt="" />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{auth.user?.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{auth.user?.name}</div>
      </div>

      <div className={styles.field} style={Styles.display}>
        <div className={styles.fieldLabel}>Password</div>
        <input type="password" />
      </div>

      <div className={styles.field} style={Styles.Display}>
        <div className={styles.fieldLabel}>Confirm Password</div>
        <input type="password" />
      </div>

      <div className={styles.btnGrp}>
        <button
          className={`button ${styles.editBtn}`}
          onClick={handleInput}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

const Styles = {
  Display: {
    display: 'none',
  },
};

export default Settings;
