import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './components/UserAuth/ProtectRoutes';
import UserAuth from './components/UserAuth/UserAuth';
import Layout from './components/Page/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Pokedex from './components/Pokedex/Pokedex.jsx';
import FuzzyBunny from './components/FuzzyBunny/FuzzyBunny.jsx';
import Families from './components/FuzzyBunny/Families.jsx';

export default function Routes() {
  return (
    <RRoutes>
      <Route path="user/*" element={<UserAuth />} />
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
            <Route index element={<Families />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RRoutes>
  );
}
