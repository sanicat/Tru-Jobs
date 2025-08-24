import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, User, ChevronRight } from 'lucide-react';
import logoUrl from '@/assets/tru-jobs-logo.svg';
import signUpBg from '@/assets/Sign-up-as-BG.png';
import bgGradient from '@/assets/bg-gradient.svg';
import bgStrip from '@/assets/bg-strip.svg';

const SignUpRoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-white flex-col md:flex-row">
      {/* Mobile Top Image Section */}
      <div className="relative md:hidden w-full h-56">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${signUpBg})` }}
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
          <h2 className="text-xl font-bold mb-1">Smarter Career Connections</h2>
          <p className="text-white/90 text-sm">
            Easily match with jobs or talent using AI-driven filters for skills, roles, and location.
          </p>
        </div>
      </div>

      {/* Left Section - Background Image with Marketing Content */}
      <div className="relative hidden md:flex w-[45%]">
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
          style={{ backgroundImage: `url(${signUpBg})` }}
        />

        {/* SVG Gradient overlay and right blue slant accent */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgGradient})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Marketing Content */}
        <div className="absolute bottom-12 left-10 text-white z-10 max-w-xl pr-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
            Smarter Career Connections
          </h2>
          <p className="text-white/90 text-base lg:text-lg max-w-lg">
            Easily match with jobs or talent using AI-driven filters for skills, roles, and location.
          </p>
        </div>
      </div>

      {/* Right Section - Role Selection Card */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-24 flex flex-col bg-white">
        {/* Back Button */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Go back"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back
          </button>
        </div>

        <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center -mt-12">
          {/* Logo and Header */}
          <div className="mb-10">
            <img src={logoUrl} alt="Tru-Jobs" className="h-8 mb-10" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign up as ?</h1>
            <p className="text-gray-600">
              Trujobs empowers your hiring and job search journey.
            </p>
          </div>

          {/* Role Options */}
          <div className="space-y-1">
            <Link
              to="/signup/job-seeker"
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-900 font-medium">Job Seeker</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
            </Link>

            <div className="my-3 border-t border-gray-200" />

            <Link
              to="/signup/employer"
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-900 font-medium">Employer</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
            </Link>
          </div>

          {/* Footer Link */}
          <div className="text-sm text-gray-500 mt-10 text-center">
            Already have an account ?{' '}
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpRoleSelection;
