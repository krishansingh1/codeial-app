import { createContext } from 'react';

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};
export const AuthContext = createContext(initialState);
