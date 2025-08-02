import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DashboardPage from './pages/DashboardPage';
import ResumeCheckerPage from './pages/ResumeCheckerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="resume-checker" element={<ResumeCheckerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;