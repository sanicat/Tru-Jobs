import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import logoUrl from '@/assets/tru-jobs-logo.svg';
import loginBg from '@/assets/login-bg.png';
import bgGradient from '@/assets/bg-gradient.svg';
import bgStrip from '@/assets/bg-strip.svg';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const tooShort = password.length > 0 && password.length < 8;
  const mismatch = confirm.length > 0 && confirm !== password;
  const valid = password.length >= 8 && confirm.length >= 8 && password === confirm;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    // TODO: call reset-password API
    navigate('/auth/login');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Background Image with Marketing Content */}
      <div className="relative hidden md:flex w-[45%]">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${bgStrip})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${loginBg})` }} />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${bgGradient})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </div>

      {/* Right Section - Reset Form */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-24 flex flex-col bg-white">
        {/* Logo */}
        <div className="mb-[75px]">
          <img src={logoUrl} alt="Tru-Jobs" className="h-8" />
        </div>

        <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Reset Your Password</h1>
            <p className="text-gray-600 mt-2">Enter your new password below.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            {/* New Password */}
            <div className="relative">
              <label htmlFor="new-password" className="sr-only">New Password</label>
              <input
                id="new-password"
                type={showPass ? 'text' : 'password'}
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={tooShort}
                aria-describedby={tooShort ? 'password-error' : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                  tooShort ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {tooShort && (
                <p id="password-error" className="mt-2 text-sm text-red-600">Password must be at least 8 characters.</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                aria-invalid={mismatch}
                aria-describedby={mismatch ? 'confirm-error' : undefined}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                  mismatch ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {mismatch && (
                <p id="confirm-error" className="mt-2 text-sm text-red-600">Passwords do not match.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!valid}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                valid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Update Password
            </button>

            <div className="text-center">
              <Link to="/" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
