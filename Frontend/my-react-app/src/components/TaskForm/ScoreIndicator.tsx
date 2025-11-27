import React from 'react';

interface Props {
  score: number;
}

export const ScoreIndicator: React.FC<Props> = ({ score }) => {
  const getColor = (s: number) => {
    if (s >= 8) return 'bg-red-500';
    if (s >= 6) return 'bg-orange-500';
    if (s >= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getLabel = (s: number) => {
    if (s >= 8) return 'Critical';
    if (s >= 6) return 'High';
    if (s >= 4) return 'Medium';
    return 'Low';
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${getColor(score)}`}></div>
      <span className="text-sm font-semibold">{score.toFixed(1)}</span>
      <span className="text-xs text-gray-500">{getLabel(score)}</span>
    </div>
  );
};