
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="w-full px-4 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/e0a89806-215a-4393-a7a2-4c4b19ee7c28.png" 
              alt="MindLyfe" 
              className="h-10"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => navigate('/auth/login')}
              className="text-gray-600 hover:text-primary"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate('/auth/register')}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Mental Wellness
            <span className="block text-primary">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join MindLyfe and embark on a journey towards better mental health with personalized tools, expert guidance, and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/auth/register')}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/auth/login')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Live Better with MindLyfe
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive tools and support for your mental wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Personalized Care</CardTitle>
              <CardDescription>
                Tailored mental health plans designed specifically for your needs
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Mood Tracking</CardTitle>
              <CardDescription>
                Monitor your emotional well-being with intelligent mood insights
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your data is protected with enterprise-grade security measures
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Expert Support</CardTitle>
              <CardDescription>
                Access to licensed therapists and mental health professionals
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Mental Wellness?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands who have already started their journey to better mental health with MindLyfe.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/auth/register')}
            className="bg-primary hover:bg-primary-dark text-white"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/ff3ae5f5-a853-4169-b2db-a115e2dddf35.png" 
              alt="MindLyfe" 
              className="h-8 brightness-0 invert"
            />
            <span className="text-xl font-semibold">MindLyfe</span>
          </div>
          <p className="text-gray-400">
            © 2024 MindLyfe. All rights reserved. Live Better.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
