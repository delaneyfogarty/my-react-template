import { useContext } from 'react';
import {
  signIn as signInService,
  signUp as signUpService,
  signOut as signOutService,
  upsertProfile,
  uploadAvatar,
} from '../services/user-service.js';
import { showError } from '../services/toaster.js';
import { UserStateContext, UserActionContext } from '../context/UserContext';

export function useStatus() {
  const { user, profile } = useContext(UserStateContext);

  return { user, profile };
}

export function useAuth() {
  const { setUser } = useContext(UserActionContext);

  const createAction = (service) => async (credentials) => {
    const { user, error } = await service(credentials);

    if (error) {
      showError(error.message);
    }
    if (user) {
      setUser(user);
    }
  };

  const signIn = createAction(signInService);
  const signUp = createAction(signUpService);
  const signOut = createAction(signOutService);

  return {
    signIn,
    signUp,
    signOut,
  };
}
export function useProfile() {
  const { user, profile } = useContext(UserStateContext);
  const { setProfile } = useContext(UserActionContext);

  const updateProfile = async ({ avatar, ...profile }) => {
    const { url, error } = await uploadAvatar(user.id, avatar);
    if (error) {
      showError(error.message);
    }
    if (url) {
      console.log('avatar upload', url, profile);
      const { data, error } = await upsertProfile({
        ...profile,
        avatar: url,
      });

      if (error) {
        showError(error.message);
      }
      if (data) {
        console.log('saved profile', data);
        setProfile(data);
      }
    }
  };

  return [profile, updateProfile];
}
