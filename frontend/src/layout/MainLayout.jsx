import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <header style={{ padding: '1rem', background: '#eee' }}>
        <h2>Navbar Placeholder</h2>
        <nav>
          <Link to="/" style={{ marginRight: '1rem' }}>HomePage</Link>
          <Link to="/resume-checker" style={{ marginRight: '1rem' }}>Resume Checker </Link>
          <Link to="chatbot" style={{ marginRight: '1rem' }} >Chatbot </Link>
          <Link to="careerpath" style={{ marginRight: '1rem' }} >Careerpath </Link>
          <Link to="login-signup" style={{ marginRight: '1rem' }} >Login-Signup </Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', background: '#eee' }}>
        <p>Footer Placeholder</p>
      </footer>
    </div>
  );
}
