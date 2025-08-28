import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import JobSeekerForm from './pages/signup/JobSeekerForm';
import EmployerForm from './pages/signup/EmployerForm';
import SignUpRoleSelection from './pages/SignUpRoleSelection';
import EnterOtp from './pages/auth/EnterOtp';
import ResetPassword from './pages/auth/ResetPassword';
import JobSeekerDashboard from '@/pages/JobSeekerDashboard';
import EmployerDashboard from '@/pages/EmployerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup/role" element={<SignUpRoleSelection />} />
        <Route path="/signup/job-seeker" element={<JobSeekerForm />} />
        <Route path="/signup/employer" element={<EmployerForm />} />
        <Route path="/auth/enter-otp" element={<EnterOtp />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<JobSeekerDashboard />} />
        <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;