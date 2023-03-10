import { useContext, useState } from 'react';
import AuthContext from '../providers/AuthProvider';
import { login } from '../api';

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const response = await login(email, password);
  };
  const logout = () => {};

  return {
    user,
    login,
    logout,
    loading,
  };
};

export default useProvideAuth;
