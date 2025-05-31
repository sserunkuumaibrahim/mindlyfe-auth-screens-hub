
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, CheckCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setEmailSent(true);
      toast({
        title: "Reset Link Sent",
        description: "Check your email for password reset instructions.",
      });
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAgain = () => {
    setEmailSent(false);
    setEmail('');
  };

  if (emailSent) {
    return (
      <AuthLayout
        title="Check Your Email"
        backTo="/auth/login"
      >
        <div className="space-y-6">
          {/* Success Message */}
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Sent!</h3>
            <p className="text-gray-600 mb-4">
              If an account exists with this email, you'll receive a password reset link.
            </p>
            <p className="font-medium text-secondary break-all">{email}</p>
            <p className="text-sm text-gray-600 mt-4">
              The link expires in 1 hour for security.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button
              onClick={() => navigate('/auth/login')}
              className="w-full bg-primary hover:bg-primary-dark text-white"
            >
              Back to Sign In
            </Button>
            
            <Button
              onClick={handleTryAgain}
              variant="outline"
              className="w-full"
            >
              Try Different Email
            </Button>
          </div>

          {/* Troubleshooting */}
          <div className="bg-amber-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Didn't receive the email?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Check spam folder</li>
              <li>• Wait a few minutes</li>
              <li>• Contact support if needed</li>
            </ul>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive reset instructions"
      backTo="/auth/login"
    >
      <div className="space-y-6">
        {/* Description */}
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Forgot Your Password?</h3>
          <p className="text-gray-600 text-sm">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@mindlyfe.org"
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Sending Reset Link...
              </>
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>

        {/* Back to Login */}
        <div className="text-center">
          <button
            onClick={() => navigate('/auth/login')}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Back to Sign In
          </button>
        </div>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            🔒 For security, we don't reveal if an email exists in our system
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
