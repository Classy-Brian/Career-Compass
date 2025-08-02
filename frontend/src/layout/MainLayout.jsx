import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <header style={{ padding: '1rem', background: '#eee' }}>
        <h2>Navbar Placeholder</h2>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', background: '#eee' }}>
        <p>Footer Placeholder</p>
      </footer>
    </>
  )
}