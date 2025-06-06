
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  stats: string;
}

interface MainFeaturesProps {
  features: Feature[];
}

const MainFeatures = ({ features }: MainFeaturesProps) => {
  const navigate = useNavigate();

  const handleFeatureClick = (route: string) => {
    console.log('Navigating to:', route);
    navigate(route);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-mindlyfe-blue" />
          Your Wellness Features
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(feature.route)}
              className={`p-4 rounded-lg border-2 text-left hover:shadow-md transition-all ${feature.color}`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {feature.stats}
                  </Badge>
                </div>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MainFeatures;
