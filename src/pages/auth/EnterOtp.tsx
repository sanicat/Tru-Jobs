import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoUrl from '@/assets/tru-jobs-logo.svg';
import loginBg from '@/assets/login-bg.png';
import bgGradient from '@/assets/bg-gradient.svg';
import bgStrip from '@/assets/bg-strip.svg';

export default function EnterOtp() {
  const navigate = useNavigate();

  // 6 OTP digits
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // Resend cooldown (seconds)
  const RESEND_SECONDS = 30;
  const [cooldown, setCooldown] = useState<number>(RESEND_SECONDS);

  // Focus first empty on mount
  useEffect(() => {
    const idx = otp.findIndex((d) => !d);
    const focusIndex = idx === -1 ? 0 : idx;
    inputsRef.current[focusIndex]?.focus();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const id = window.setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  const value = useMemo(() => otp.join(''), [otp]);
  const isComplete = value.length === 6 && /^[0-9]{6}$/.test(value);

  const handleChange = (index: number, v: string) => {
    if (!v) {
      setOtp((prev) => {
        const next = [...prev];
        next[index] = '';
        return next;
      });
      return;
    }

    const char = v[v.length - 1];
    if (!/^[0-9]$/.test(char)) return;

    setOtp((prev) => {
      const next = [...prev];
      next[index] = char;
      return next;
    });

    // Move to next
    if (index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        setOtp((prev) => {
          const next = [...prev];
          next[index] = '';
          return next;
        });
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        setOtp((prev) => {
          const next = [...prev];
          next[index - 1] = '';
          return next;
        });
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData('text').trim();
    if (!text) return;
    if (!/^[0-9]+$/.test(text)) return;
    e.preventDefault();
    const digits = text.slice(0, 6).split('');
    setOtp((prev) => {
      const next = [...prev];
      for (let i = 0; i < 6; i++) next[i] = digits[i] || '';
      return next;
    });
    const focusIndex = Math.min(digits.length, 5);
    inputsRef.current[focusIndex]?.focus();
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;
    // TODO: call verify API here
    navigate('/auth/reset-password');
  };

  const handleResend = () => {
    if (cooldown > 0) return;
    // TODO: call resend OTP API here
    setCooldown(RESEND_SECONDS);
  };

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

        {/* Marketing Content (optional brief message to match visual balance) */}
        <div className="absolute bottom-32 left-12 text-white z-10 max-w-xl mr-[15%]">
          <h2 className="text-2xl lg:text-4xl font-bold mb-12 leading-tight">
            Over 1,75,324 candidates waiting for good employees.
          </h2>
        </div>
      </div>

      {/* Right Section - OTP Form */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-16 flex flex-col bg-white">
        {/* Logo */}
        <div className="mb-[75px]">
          <img src={logoUrl} alt="Tru-Jobs" className="h-8" />
        </div>

        {/* Form Container */}
        <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Enter Verification Code</h1>
            <p className="text-gray-600 mt-2">
              We have sent a 6-digit verification code to your registered email.
            </p>
            <div className="mt-2">
              <Link to="/" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Go back to Sign In
              </Link>
            </div>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex items-center gap-3">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  onPaste={handlePaste}
                  aria-label={`OTP digit ${idx + 1}`}
                  className="w-12 h-12 text-center text-lg border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-hidden transition-all hover:border-gray-400"
                />
              ))}
            </div>

            {/* Timer + Resend */}
            <div className="flex items-center justify-between text-sm">
              <span className={`tabular-nums ${cooldown > 0 ? 'text-red-500' : 'text-gray-500'}`}>
                {cooldown > 0 ? `00:${String(cooldown).padStart(2, '0')} sec` : 'You can resend now'}
              </span>
              <button
                type="button"
                onClick={handleResend}
                disabled={cooldown > 0}
                className={`font-medium ${cooldown > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-700'}`}
              >
                Resend OTP
              </button>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={!isComplete}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                isComplete ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
