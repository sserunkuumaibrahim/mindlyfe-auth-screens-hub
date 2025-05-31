
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="there"
      subtitle="Sign in to access your package history and get real-time updates on all your shipments."
      showBackButton={false}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>
          <button
            type="button"
            onClick={() => navigate('/auth/forgot-password')}
            className="text-sm text-primary hover:text-primary-dark"
          >
            Forgot password?
          </button>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          className="w-full h-14 bg-red-500 hover:bg-red-600 text-white text-base font-semibold rounded-2xl border-0"
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : "Sign in"}
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

        {/* Google Sign In */}
        <Button
          type="button"
          variant="outline"
          className="w-full h-14 border border-gray-200 rounded-2xl text-base font-medium bg-white hover:bg-gray-50"
        >
          <span className="mr-3">🔍</span>
          Continue with Google
        </Button>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            type="button"
            onClick={() => navigate('/auth/register')}
            className="text-red-500 font-medium"
          >
            Create an account
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
