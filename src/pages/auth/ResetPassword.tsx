
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Lock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import PasswordStrengthIndicator from '@/components/auth/PasswordStrengthIndicator';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const token = searchParams.get('token');
  const passwordsMatch = formData.newPassword === formData.confirmPassword && formData.confirmPassword !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordsMatch) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are identical.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Password Updated!",
        description: "Your password has been successfully changed.",
      });
      
      navigate('/auth/login');
    } catch (error) {
      toast({
        title: "Update failed",
        description: "Please try again or request a new reset link.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = (field: 'new' | 'confirm') => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  if (!token) {
    return (
      <AuthLayout
        title="Invalid Reset Link"
        backTo="/auth/forgot-password"
      >
        <div className="space-y-6">
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Link Invalid or Expired</h3>
            <p className="text-gray-600 mb-4">
              This password reset link is invalid or has expired.
            </p>
            <p className="text-sm text-gray-600">
              Password reset links expire after 1 hour for security.
            </p>
          </div>

          <Button
            onClick={() => navigate('/auth/forgot-password')}
            className="w-full bg-primary hover:bg-primary-dark text-white"
          >
            Request New Reset Link
          </Button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Choose a strong password for your account"
      backTo="/auth/login"
    >
      <div className="space-y-6">
        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Create New Password</h3>
          <p className="text-gray-600 text-sm">
            Choose a strong password for your account.
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="newPassword"
                  type={showPasswords.new ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={(e) => updateFormData('newPassword', e.target.value)}
                  placeholder="••••••••••••••••••"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {formData.newPassword && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</p>
                  <PasswordStrengthIndicator password={formData.newPassword} />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="confirmPassword"
                  type={showPasswords.confirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  placeholder="••••••••••••••••••"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {formData.confirmPassword && (
                <div className="flex items-center gap-2 text-sm mt-2">
                  {passwordsMatch ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-secondary">Passwords match</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-red-500">Passwords don't match</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white"
            disabled={isLoading || !passwordsMatch}
          >
            {isLoading ? "Updating Password..." : "Update Password"}
          </Button>
        </form>

        {/* Security Notice */}
        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Security Notice</h4>
              <p className="text-sm text-gray-600">
                After updating your password, you'll be signed out of all devices for security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
