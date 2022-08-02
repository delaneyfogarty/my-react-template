import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
            <Route index element={<Families />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
