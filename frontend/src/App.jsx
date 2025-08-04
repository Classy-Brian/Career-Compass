import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ResumeCheckerPage from './pages/ResumeCheckerPage';
import DashboardPage from './pages/DashboardPage';
import ChatbotPage from './pages/ChatBotPage';
import CareerPathPage from './pages/CareerPathPage';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} /> 
          <Route path="resume-checker" element={<ResumeCheckerPage />} />
          <Route path="dashboard" element={<DashboardPage />} /> 
          <Route path="chatbot" element={<ChatbotPage />} /> 
          <Route path="careerpath" element={<CareerPathPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
