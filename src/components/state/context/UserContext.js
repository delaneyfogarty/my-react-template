import { createContext, useMemo, useState, useEffect } from 'react';
import {
  getUser,
  getLocalProfile,
  saveLocalProfile,
  removeLocalProfile,
  getProfile,
  onAuthChange,
  signOut,
} from '../services/user-service.js';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState(getLocalProfile());

  const loadProfile = async () => {
    const { data, error } = await getProfile();
    if (error) {
      console.log(error);
    }
    if (data) {
      setProfile(data);
      saveLocalProfile(data);
    }
  };

  useEffect(() => {
    if (user) loadProfile();

    const { data } = onAuthChange((event) => {
      console.log('auth change event', event);
      if (event == 'SIGNED_IN') loadProfile();
      if (event == 'SIGNED_OUT') {
        setUser(null);
        setProfile(null);
        removeLocalProfile();
      }
    });
    return () => data.unsubscribe();
  }, []);

  const stateValue = {
    user,
    profile,
  };

  const actionValue = useMemo(
    () => ({
      setUser,
      setProfile,
    }),
    [setUser, setProfile]
  );

  return (
    <UserStateContext.Provider value={stateValue}>
      <UserActionContext.Provider value={actionValue}>
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
}
