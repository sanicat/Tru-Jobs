import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Eye, EyeOff, ChevronDown, Check } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { SocialButton } from '@/components/ui/social-button';
import loginBg from '@/assets/Sign-up-as-BG.png';
import bgGradient from '@/assets/bg-gradient.svg';
import bgStrip from '@/assets/bg-strip.svg';
import logoUrl from '@/assets/tru-jobs-logo.svg';

const JobSeekerForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const roleBtnRef = useRef<HTMLButtonElement | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);

  const ready =
    fullName.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    confirm.trim().length > 0 &&
    password === confirm &&
    accepted;

  return (
    <div className="flex min-h-screen bg-white flex-col md:flex-row">
      {/* Mobile Top Image Section */}
      <div className="relative md:hidden w-full h-56">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginBg})` }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgGradient})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Marketing Text */}
        <div className="absolute bottom-4 left-4 right-4 text-white z-10">
          <h2 className="text-xl font-bold mb-1">Create Your Candidate Profile</h2>
          <p className="text-white/90 text-sm">
            Get matched with jobs, boost your profile with endorsements, and apply faster.
          </p>
        </div>
      </div>

      {/* Left Section - Background Image with Marketing Content */}
      <div className="relative hidden md:flex w-[40%]">
        {/* Background Strip */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgStrip})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginBg})` }}
        />

        {/* SVG Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgGradient})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Marketing Content */}
        <div className="absolute bottom-12 left-10 text-white z-10 max-w-xl pr-8 mr-[15%]">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
            Create Your Candidate Profile
          </h2>
          <p className="text-white/90 text-base lg:text-lg max-w-lg">
            Get matched with jobs, boost your profile with endorsements, and apply faster.
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-16 flex flex-col bg-white">
        {/* Logo */}
        <div className="mb-[75px]">
          <img src={logoUrl} alt="Tru-Jobs" className="h-8" />
        </div>

        {/* Form Container */}
        <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center">
          {/* Header with role and login link */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              <h1 className="text-2xl font-bold text-gray-900 mt-0">Let's Build your Profile</h1>
              {/* Role Dropdown */}
              <div className="relative">
                <button
                  ref={roleBtnRef}
                  type="button"
                  className="px-3 py-2 text-sm border rounded-md text-gray-600 bg-white hover:bg-gray-50 inline-flex items-center gap-2"
                  aria-haspopup="menu"
                  aria-expanded={roleOpen}
                  onClick={() => setRoleOpen((o) => !o)}
                  onBlur={(e) => {
                    // close if focus moves outside the dropdown
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setRoleOpen(false);
                  }}
                >
                  Job Seeker
                  <ChevronDown className="w-4 h-4" />
                </button>
                {roleOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-44 rounded-md border bg-white shadow-md z-20 py-1"
                  >
                    <button
                      role="menuitem"
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 cursor-default"
                      tabIndex={-1}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <Check className="w-4 h-4 text-blue-600" /> Job Seeker
                    </button>
                    <button
                      role="menuitem"
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setRoleOpen(false);
                        navigate('/signup/employer');
                      }}
                    >
                      Employer
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Already have account?{' '}
              <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
                Log In
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <Input
                id="fullName"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 text-sm text-gray-600 leading-6">
              <Checkbox
                id="terms"
                checked={accepted}
                onCheckedChange={(v) => setAccepted(Boolean(v))}
                className="mt-0.5"
              />
              <span>
                I agree to the{' '}
                <a className="text-blue-600 hover:text-blue-700 font-medium" href="#">Terms and Conditions</a>
                , and{' '}
                <a className="text-blue-600 hover:text-blue-700 font-medium" href="#">Privacy Policy</a>
              </span>
            </label>

            {/* Register Button */}
            <Button
              type="submit"
              className={
                `w-full py-3 text-sm ${
                  ready
                    ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                    : 'bg-gray-200 text-gray-500 hover:bg-gray-200 cursor-not-allowed'
                }`
              }
              disabled={!ready}
            >
              Register
            </Button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">or</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SocialButton
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#0077B5" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                }
                provider="linkedin"
              >
                Sign up with LinkedIn
              </SocialButton>
              <SocialButton
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                    <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" />
                    <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                    <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" />
                  </svg>
                }
                provider="google"
              >
                Sign up with Google
              </SocialButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerForm;
