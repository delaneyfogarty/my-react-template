import { createContext, useReducer } from 'react';

export const FuzzyBunnyContext = createContext();

function reducer(families, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, dispatch] = useReducer(reducer, null);

  const value = { families, dispatch };

  return (
    <FuzzyBunnyContext.Provider value={value}>
      {children}
    </FuzzyBunnyContext.Provider>
  );
}
