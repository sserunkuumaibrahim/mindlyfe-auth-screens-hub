
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.terms || !agreements.privacy) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are identical.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Account Created!",
        description: "Please check your email to verify your account.",
      });
      
      navigate('/auth/verify-email', { 
        state: { email: formData.email } 
      });
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="there"
      subtitle="Create an account to access your package history and get real-time updates on all your shipments."
      backTo="/auth/login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="Enter your mail/phone number"
              className="pl-12 h-14 bg-gray-50 border-0 rounded-2xl text-base placeholder:text-gray-500"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              👁️
            </button>
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-3">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              placeholder="Create password"
              className="pl-12 h-14 bg-gray-50 border-0 rounded-2xl text-base"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-3">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => updateFormData('confirmPassword', e.target.value)}
              placeholder="Re-type your password"
              className="pl-12 h-14 bg-gray-50 border-0 rounded-2xl text-base"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreements.terms}
              onCheckedChange={(checked) => setAgreements(prev => ({ ...prev, terms: checked as boolean }))}
              className="mt-1 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              By signing up you agree to our{' '}
              <span className="text-red-500">Terms of Service</span> and{' '}
              <span className="text-red-500">Privacy Policy</span>
            </label>
          </div>
        </div>

        {/* Sign Up Button */}
        <Button
          type="submit"
          className="w-full h-14 bg-red-500 hover:bg-red-600 text-white text-base font-semibold rounded-2xl border-0 mt-8"
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Sign up"}
        </Button>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or</span>
          </div>
        </div>

        {/* Google Sign Up */}
        <Button
          type="button"
          variant="outline"
          className="w-full h-14 border border-gray-200 rounded-2xl text-base font-medium bg-white hover:bg-gray-50"
        >
          <span className="mr-3">🔍</span>
          Sign up using Google
        </Button>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <button
            type="button"
            onClick={() => navigate('/auth/login')}
            className="text-red-500 font-medium"
          >
            Sign in
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
