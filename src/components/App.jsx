import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from '../Routes';
import UserProvider from './state/context/UserContext';
import FuzzyBunnyProvider from './state/context/FuzzyBunnyContext';

export default function App() {
  return (
    <UserProvider>
      <FuzzyBunnyProvider>
        <Toaster />
        <Router>
          <Routes />
        </Router>
      </FuzzyBunnyProvider>
    </UserProvider>
  );
}
