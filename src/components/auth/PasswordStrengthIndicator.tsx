
import React from 'react';
import { Check, X } from 'lucide-react';

interface PasswordRequirement {
  met: boolean;
  text: string;
}

interface PasswordStrengthIndicatorProps {
  password: string;
  className?: string;
}

const PasswordStrengthIndicator = ({ password, className = "" }: PasswordStrengthIndicatorProps) => {
  const requirements: PasswordRequirement[] = [
    { met: password.length >= 8, text: "8+ characters" },
    { met: /[A-Z]/.test(password), text: "Uppercase letter" },
    { met: /[a-z]/.test(password), text: "Lowercase letter" },
    { met: /\d/.test(password), text: "Number" },
    { met: /[!@#$%^&*(),.?":{}|<>]/.test(password), text: "Special character" }
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      {requirements.map((req, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          {req.met ? (
            <Check className="w-4 h-4 text-secondary" />
          ) : (
            <X className="w-4 h-4 text-gray-400" />
          )}
          <span className={req.met ? "text-secondary" : "text-gray-500"}>
            {req.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PasswordStrengthIndicator;
