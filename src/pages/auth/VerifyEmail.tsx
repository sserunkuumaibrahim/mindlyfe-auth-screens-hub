
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const email = location.state?.email || 'user@mindlyfe.org';

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Email Verified!",
        description: "Your account has been successfully activated.",
      });
      
      navigate('/auth/login');
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "Invalid code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setIsResending(true);
    setCountdown(60);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Email Sent!",
        description: "A new verification email has been sent.",
      });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout
      title="Verify Your Email"
      backTo="/auth/register"
    >
      <div className="space-y-6">
        {/* Email Check Section */}
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
          <p className="text-gray-600 mb-4">
            We've sent a verification link to:
          </p>
          <p className="font-medium text-primary break-all">{email}</p>
          <p className="text-sm text-gray-600 mt-4">
            Click the link in the email to verify your account.
          </p>
        </div>

        {/* Verification Code Section */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Enter Verification Code</h4>
            <p className="text-sm text-gray-600 mb-4">If you have the code:</p>
            
            <form onSubmit={handleVerification} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">6-Digit Code</Label>
                <Input
                  id="code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="123456"
                  className="text-center text-lg tracking-widest"
                  maxLength={6}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white"
                disabled={verificationCode.length !== 6 || isLoading}
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </Button>
            </form>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="bg-amber-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Didn't receive the email?</h4>
          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li>• Check your spam folder</li>
            <li>• Wait up to 5 minutes</li>
            <li>• Make sure the email address is correct</li>
          </ul>
          
          <Button
            onClick={handleResendEmail}
            disabled={countdown > 0 || isResending}
            variant="outline"
            className="w-full"
          >
            {isResending ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : countdown > 0 ? (
              `Resend in ${countdown}s`
            ) : (
              "Resend Email"
            )}
          </Button>
        </div>

        {/* Change Email */}
        <div className="text-center">
          <button
            onClick={() => navigate('/auth/register')}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Change Email Address
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
