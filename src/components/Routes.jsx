import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './UserAuth/ProtectRoutes';
import UserAuth from './UserAuth/UserAuth';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families.jsx';

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
