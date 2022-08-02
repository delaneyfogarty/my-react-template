import { createContext, useReducer, useMemo } from 'react';

export const FuzzyBunnyContext = createContext();
export const FuzzyBunnyDispatchContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, familiesDispatch] = useReducer(reducer, null);

  const stateValue = { families };

  const dispatchValue = useMemo(
    () => ({
      familiesDispatch,
    }),
    [familiesDispatch]
  );

  return (
    <FuzzyBunnyContext.Provider value={stateValue}>
      <FuzzyBunnyDispatchContext.Provider value={dispatchValue}>
        {children}
      </FuzzyBunnyDispatchContext.Provider>
    </FuzzyBunnyContext.Provider>
  );
}
