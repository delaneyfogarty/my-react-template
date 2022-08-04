import { useContext, useEffect, useMemo, useState } from 'react';
import {
  FuzzyBunnyContext,
  FuzzyBunnyDispatchContext,
} from '../context/FuzzyBunnyContext';
import {
  getFamiliesWithBunnies,
  addFamily,
  removeFamily,
} from '../services/fuzzy-bunny-service';
import { showSuccess, showError } from '../services/toaster';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families } = useContext(FuzzyBunnyContext);
  const { familiesDispatch } = useContext(FuzzyBunnyDispatchContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getFamiliesWithBunnies();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        familiesDispatch({ type: 'load', payload: data });
      }
    };
    fetch();

    return () => (ignore = true);
  }, []);

  return { families, error };
}

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);

      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };
  };
}

export function useFamilyActions() {
  const { familiesDispatch } = useContext(FuzzyBunnyDispatchContext);

  const createAction = createDispatchActions(familiesDispatch);

  const add = createAction({
    service: addFamily,
    type: 'add',
    success: (data) => `Added new family "${data.name}"`,
  });

  const remove = createAction({
    service: removeFamily,
    type: 'remove',
    success: (data) => `Removed family "${data.name}"`,
  });

  return useMemo(() => ({ add, remove }), [familiesDispatch]);
}
