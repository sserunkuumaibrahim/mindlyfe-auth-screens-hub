
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import PasswordStrengthIndicator from '@/components/auth/PasswordStrengthIndicator';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accountType: 'individual'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    newsletter: false
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

    setIsLoading(true);

    try {
      // Simulate API call
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

  const updateAgreements = (field: string, value: boolean) => {
    setAgreements(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your wellness journey with MindLyfe"
      backTo="/"
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 text-center">
          <h3 className="font-semibold text-gray-900 mb-1">Welcome to MindLyfe</h3>
          <p className="text-sm text-gray-600">Start your wellness journey</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Personal Information</h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    placeholder="John"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="user@mindlyfe.org"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  placeholder="••••••••••••••••••"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {formData.password && (
                <PasswordStrengthIndicator password={formData.password} className="mt-3" />
              )}
            </div>
          </div>

          {/* Account Type */}
          <div className="space-y-3">
            <Label>Account Type</Label>
            <RadioGroup
              value={formData.accountType}
              onValueChange={(value) => updateFormData('accountType', value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual">Individual User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="organization" id="organization" />
                <Label htmlFor="organization">Organization Member</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="minor" id="minor" />
                <Label htmlFor="minor">Minor (Under 18)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Agreements */}
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={agreements.terms}
                onCheckedChange={(checked) => updateAgreements('terms', checked as boolean)}
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <span className="text-primary">Terms of Service</span>
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy"
                checked={agreements.privacy}
                onCheckedChange={(checked) => updateAgreements('privacy', checked as boolean)}
                required
              />
              <Label htmlFor="privacy" className="text-sm">
                I agree to the <span className="text-primary">Privacy Policy</span>
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="newsletter"
                checked={agreements.newsletter}
                onCheckedChange={(checked) => updateAgreements('newsletter', checked as boolean)}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to newsletter (optional)
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Sign In Link */}
        <div className="text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            onClick={() => navigate('/auth/login')}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
