import styles from '../styles/settings.module.css';
import { useAuth } from '../hooks/useProvideAuth';
import { useState } from 'react';

const Settings = () => {
  const auth = useAuth();

  const [editMode, setEditMode] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const displayStyle = {
    display: editMode ? 'block' : 'none',
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

      <div className={styles.field} style={displayStyle}>
        <div className={styles.fieldLabel}>Password</div>
        <input type="password" />
      </div>

      <div className={styles.field} style={displayStyle}>
        <div className={styles.fieldLabel}>Confirm Password</div>
        <input type="password" />
      </div>

      <div className={styles.btnGrp}>
        <button
          className={`button ${styles.editBtn}`}
          onClick={() => handleInput()}
        >
          Edit Profile
        </button>
        <button className={`button ${styles.saveBtn}`} style={displayStyle}>
          Save
        </button>
        <button className={`button ${styles.goBack}`} style={displayStyle}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Settings;
