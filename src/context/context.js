import { createContext, useContext } from 'react';

//Create context
export const AuthContext = createContext(false);

//Create hook to to use the context
export function useAuth() {
  return useContext(AuthContext);
}
export default { AuthContext, useAuth}
