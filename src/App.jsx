
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <NavLink to="/" className="brand">
          Glow Beauty
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={
            <main className="container">
              <h1>404 - Page Not Found</h1>
              <NavLink to="/">Go Home</NavLink>
            </main>
          }
        />
      </Routes>

      <footer className="footer">
        © 2026 Glow Beauty Salon
      </footer>
    </BrowserRouter>
  );
}

export default App;
