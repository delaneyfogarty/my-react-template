import { useContext, useEffect, useState } from 'react';
import {
  FuzzyBunnyContext,
  FuzzyBunnyDispatchContext,
} from '../context/FuzzyBunnyContext';
import { getFamiliesWithBunnies } from '../services/fuzzy-bunny-service';
// import { showSuccess, showError } from '../services/toaster';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families } = useContext(FuzzyBunnyContext);
  const { familiesDispatch } = useContext(FuzzyBunnyDispatchContext);

  console.log('families', families);
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

// function createDispatchActions(dispatch) {
//   return function createAction({ service, type, success }) {
//     return async (...args) => {
//       const { data, error } = await service(...args);

//       if (error) showError(error.message);

//       if (data) {
//         dispatch({ type, payload: data });
//         const successMessage = success(data);
//         showSuccess(successMessage);
//       }
//     };
//   };
// }
