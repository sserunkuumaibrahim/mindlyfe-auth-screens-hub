
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';

const MFAVerify = () => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Verification Successful!",
        description: "You've been securely logged in.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Invalid Code",
        description: "Please check your authenticator app and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatCode = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 6);
    return digits.replace(/(\d{3})(\d{3})/, '$1 $2').trim();
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCode(e.target.value);
    setCode(formatted);
  };

  return (
    <AuthLayout
      title="Two-Factor Authentication"
      subtitle="Enter your authentication code to continue"
      backTo="/auth/login"
    >
      <div className="space-y-6">
        {/* MFA Instructions */}
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Enter Authentication Code</h3>
          <p className="text-gray-600 text-sm">
            Open your authenticator app and enter the 6-digit code:
          </p>
        </div>

        {/* Code Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">6-Digit Code</Label>
            <Input
              id="code"
              value={code}
              onChange={handleCodeChange}
              placeholder="123 456"
              className="text-center text-2xl tracking-widest font-mono"
              maxLength={7} // 6 digits + 1 space
              autoComplete="one-time-code"
              required
            />
            <div className="text-center">
              <span className="text-sm text-gray-500">
                Code expires in: <span className="font-mono text-primary">00:{countdown.toString().padStart(2, '0')}</span>
              </span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white"
            disabled={code.replace(/\s/g, '').length !== 6 || isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify Code"
            )}
          </Button>
        </form>

        {/* Troubleshooting */}
        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Having trouble?</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Make sure your device time is synchronized</li>
                <li>• Try generating a new code</li>
                <li>• Check you're using the correct authenticator app</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate('/auth/backup-code')}
          >
            Use Backup Code
          </Button>
          
          <Button
            variant="ghost"
            className="w-full text-gray-600"
            onClick={() => navigate('/auth/login')}
          >
            Cancel Login
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default MFAVerify;
