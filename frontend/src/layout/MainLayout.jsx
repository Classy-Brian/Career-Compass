import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <header style={{ padding: '1rem', background: '#eee' }}>
        <h2>Navbar Placeholder</h2>
        <nav>
          <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/resume-checker">Resume Checker</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', background: '#eee' }}>
        <p>Footer Placeholder</p>
      </footer>
    </>
  );
}
