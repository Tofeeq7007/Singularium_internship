import React from 'react';
import { Zap, Target, AlertCircle } from 'lucide-react';

interface Props {
  urgency: number;
  importance: number;
  effort: number;
}

export const PriorityBadges: React.FC<Props> = ({ 
  urgency, 
  importance, 
  effort 
}) => (
  <div className="flex gap-2 flex-wrap">
    <div className="flex items-center gap-1 bg-red-100 px-2 py-1 rounded text-xs">
      <Zap size={12} className="text-red-600" />
      <span className="text-red-700">U: {urgency}</span>
    </div>
    <div className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded text-xs">
      <Target size={12} className="text-blue-600" />
      <span className="text-blue-700">I: {importance}</span>
    </div>
    <div className="flex items-center gap-1 bg-purple-100 px-2 py-1 rounded text-xs">
      <AlertCircle size={12} className="text-purple-600" />
      <span className="text-purple-700">E: {effort}</span>
    </div>
  </div>
);