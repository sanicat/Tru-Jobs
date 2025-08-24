import { ArrowLeft, Eye, EyeOff, Briefcase, Building } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocialButton } from '@/components/ui/social-button';
import logoUrl from '@/assets/tru-jobs-logo.svg';
import loginBg from '@/assets/login-bg.png';
import bgGradient from '@/assets/bg-gradient.svg';
import bgStrip from '@/assets/bg-strip.svg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Background Image with Marketing Content */}
      <div className="relative hidden md:flex w-[45%]">
        {/* Background Strip */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${bgStrip})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${loginBg})`
          }}
        />
        
        {/* SVG Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${bgGradient})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Marketing Content */}
        <div className="absolute bottom-32 left-12 text-white z-10 max-w-xl">
          <h2 className="text-2xl lg:text-4xl font-bold mb-12 leading-tight">
            Over 1,75,324 candidates waiting for good employees.
          </h2>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { 
                number: '1,75,324', 
                label: 'Live Jobs',
                icon: <Briefcase className="w-6 h-6" />
              },
              { 
                number: '97,354', 
                label: 'Companies',
                icon: <Building className="w-6 h-6" />
              },
              { 
                number: '7,532', 
                label: 'New Jobs',
                icon: <Briefcase className="w-6 h-6" />
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-14 h-14 rounded-lg mb-4 mx-auto flex items-center justify-center backdrop-blur-sm">
                  {stat.icon}
                </div>
                <p className="text-lg font-semibold text-white">{stat.number}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-24 flex flex-col bg-white">
        {/* Back Button */}
        <div className="mb-8">
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back
          </button>
        </div>

        {/* Login Form Container */}
        <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center -mt-12">
          {/* Logo and Header */}
          <div className="mb-12">
            <img 
              src={logoUrl} 
              alt="Tru-Jobs" 
              className="h-8 mb-12"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign in</h1>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup/role')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <span className="text-sm text-gray-600">Remember Me</span>
              </label>

              <button 
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors
                ${isFormValid 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-300 cursor-not-allowed'}`}
            >
              Sign in
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4">
              <SocialButton
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#0077B5" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                }
                provider="linkedin"
              >
                Sign in with LinkedIn
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
                Sign in with Google
              </SocialButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}