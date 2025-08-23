import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import BackgroundImage from '@/components/BackgroundImage';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Background Image and Content */}
      <div className="relative w-[736px]">
        {/* Background Image */}
        <BackgroundImage />
        
        {/* Blue overlay on the right */}
        <div className="absolute right-0 top-0 w-[197.5px] h-full bg-primary"></div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end pb-20 pl-[110px]">
          {/* Main heading */}
          <h1 className="mb-11 w-[490px] text-35 font-bold leading-[1.2] text-white">
            Over 1,75,324 candidates waiting for good employees.
          </h1>
          
          {/* Stats */}
          <div className="flex w-[490px] gap-5">
            {/* Live Jobs */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 rounded-[7px] bg-white/10 px-[14px] py-[14px]">
                <div className="flex h-7 w-7 items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M3.5 7.88H24.52V23.65H3.5V7.88Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M9.63 4.38H18.39V7.88H9.63V4.38Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M3.5 13.83H24.52V16.64H3.5V13.83Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M12.7 13.14H15.33" stroke="white" strokeWidth="1.31"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-17 font-semibold text-white">1,75,324</span>
                <span className="text-12 text-white/70">Live Job</span>
              </div>
            </div>
            
            {/* Companies */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 rounded-[7px] bg-white/10 px-[14px] py-[14px]">
                <div className="flex h-7 w-7 items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M1.75 23.65H26.27" stroke="white" strokeWidth="1.31"/>
                    <path d="M15.76 10.51H24.52V23.65H15.76V10.51Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M7.01 7.88H10.51" stroke="white" strokeWidth="1.31"/>
                    <path d="M8.76 14.89H12.26" stroke="white" strokeWidth="1.31"/>
                    <path d="M7.01 19.27H10.51" stroke="white" strokeWidth="1.31"/>
                    <path d="M19.27 19.27H21.02" stroke="white" strokeWidth="1.31"/>
                    <path d="M19.27 14.89H21.02" stroke="white" strokeWidth="1.31"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-17 font-semibold text-white">97,354</span>
                <span className="text-12 text-white/70">Companies</span>
              </div>
            </div>
            
            {/* New Jobs */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 rounded-[7px] bg-white/10 px-[14px] py-[14px]">
                <div className="flex h-7 w-7 items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M3.5 7.88H24.52V23.65H3.5V7.88Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M9.63 4.38H18.39V7.88H9.63V4.38Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M3.5 13.83H24.52V16.64H3.5V13.83Z" stroke="white" strokeWidth="1.31" fill="none"/>
                    <path d="M12.7 13.14H15.33" stroke="white" strokeWidth="1.31"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-17 font-semibold text-white">7,532</span>
                <span className="text-12 text-white/70">New Jobs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Login Form */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-20">
        {/* Logo */}
        <div className="absolute left-0 top-[100px] flex items-center gap-3">
          <div className="flex h-[30.55px] w-[30.55px] items-center justify-center rounded-full bg-white">
            <div className="h-6 w-6 rounded-full bg-black"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Tru</span>
            <span className="text-2xl font-bold text-primary">Jobs</span>
            <span className="text-sm text-primary">-</span>
          </div>
        </div>
        
        {/* Login Form */}
        <div className="flex w-[465px] flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-32 font-medium text-text-primary">Sign in</h2>
            <div className="flex items-center gap-1">
              <span className="text-16 text-text-secondary">Don't have an account ?</span>
              <button className="text-16 font-medium text-primary-light">Sign up</button>
            </div>
          </div>
          
          {/* Form */}
          <div className="flex flex-col gap-5">
            <Input 
              placeholder="Email address"
              className="w-[465px]"
            />
            
            <Input 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-[465px]"
              icon={
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-text-primary"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              }
            />
            
            <div className="flex w-[465px] items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label htmlFor="remember" className="text-14 text-text-tertiary">
                  Remember Me
                </label>
              </div>
              <button className="text-14 font-medium text-primary-light">
                Forget password
              </button>
            </div>
          </div>
          
          {/* Sign in button */}
          <Button 
            variant="disabled" 
            size="large"
            disabled
          >
            Sign in
          </Button>
          
          {/* Social login */}
          <div className="flex w-[464px] flex-col items-center gap-4">
            <span className="text-14 text-text-tertiary">or</span>
            <div className="flex gap-5">
              {/* LinkedIn */}
              <Button variant="outline" size="default" className="w-[222px]">
                <div className="flex items-center gap-3">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M0.92 0.92H18.07V18.07H0.92V0.92Z" fill="#0073B6"/>
                  </svg>
                  <span className="text-14 text-text-muted">Sign in with Linkedin</span>
                </div>
              </Button>
              
              {/* Google */}
              <Button variant="outline" size="default" className="w-[222px]">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M0 5.4L4.43 14.74" fill="#FBBB00"/>
                      <path d="M10.22 8.13L20 8.13L15.57 17.47L10.22 8.13Z" fill="#518EF8"/>
                      <path d="M1.19 12.09L15.26 12.09L10.83 20L1.19 12.09Z" fill="#28B446"/>
                      <path d="M1.12 0L15.38 0L10.95 8.07L1.12 0Z" fill="#F14336"/>
                    </svg>
                  </div>
                  <span className="text-14 text-text-muted">Sign in with Google</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating notification */}
        <div className="absolute right-20 top-[88px] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-primary-bg">
          <div className="flex h-6 w-6 items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M0 5.24L24 5.24L24 18.74L0 18.74L0 5.24Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

