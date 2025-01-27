import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLink from './NavLink';
import NavLinkHome from './NavLinkHome';
// import NavSearch from './NavSearch';
import NavLogo from "./NavLogo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavLinkHome />
              <NavLogo />
              <NavLink />
              {/* <NavSearch /> */}
            </div>
          }
        />
        <Route path="/navlinkhome" element={<NavLinkHome />} />
        <Route path="/navlogo" element={<NavLogo />} />
        {/* <Route path="/navsearch" element={<NavSearch />} /> */}
        <Route path="/navlink" element={<NavLink />} />
      </Routes>
    </Router>
  );
}

export default App;