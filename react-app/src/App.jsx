import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLink from './components/NavLink';
import NavLinkHome from './components/NavLinkHome';
import NavLogo from "./components/NavLogo";

function App() {
  return (
      <Router>
        <NavLinkHome />
        <NavLogo />
        <NavLink />

        <Routes>
          <Route path="/navlinkhome" element={<NavLinkHome />} />
          <Route path="/navlogo" element={<NavLogo />} />
          <Route path="/navlink" element={<NavLink />} />
        </Routes>
      </Router>
  );
}

export default App;