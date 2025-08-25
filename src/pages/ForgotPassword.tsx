import { ArrowLeft, Briefcase, Building } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoUrl from '@/assets/tru-jobs-logo.svg';
import loginBg from '@/assets/login-bg.png';
import bgGradient from '@/assets/bg-gradient.svg';
import bgStrip from '@/assets/bg-strip.svg';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // After requesting reset, navigate to OTP verification
    navigate('/auth/enter-otp');
  };

  const isFormValid = email && email.includes('@');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Background Image with Marketing Content */}
      <div className="relative hidden md:flex w-[40%]">
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
        <div className="absolute bottom-32 left-12 text-white z-10 max-w-xl mr-[15%]">
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
                <div className="bg-white/10 w-14 h-14 rounded-lg mb-4 mx-auto flex items-center justify-center backdrop-blur-xs">
                  {stat.icon}
                </div>
                <p className="text-lg font-semibold text-white">{stat.number}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Forgot Password Form */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-16 flex flex-col bg-white">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back
          </button>
        </div>

        {/* Forgot Password Form Container */}
        <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center -mt-12">
          {/* Logo and Header */}
          <div className="mb-12">
            <img 
              src={logoUrl} 
              alt="Tru-Jobs" 
              className="h-8 mb-12"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password</h1>
            <p className="text-gray-600">
              Enter your email to reset your password
            </p>
          </div>

          {/* Forgot Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-hidden transition-all"
              />
            </div>

            {/* Send Reset Link Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors
                ${isFormValid 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-300 cursor-not-allowed'}`}
            >
              Send Reset Link
            </button>

            {/* Back to Login Link */}
            <div className="text-center">
              <button 
                type="button"
                onClick={() => navigate('/')}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
