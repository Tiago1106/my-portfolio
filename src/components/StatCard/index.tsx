import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

export default function StatCard({ number, label, className }: StatCardProps) {
  return (
    <div className={`bg-gray-200 backdrop-blur-sm p-4 rounded-lg flex-1 flex flex-col items-center ${className}`}>
      <h3 className="text-xl font-bold text-gray-800text-center md:text-left">{number}</h3>
      <p className="text-sm text-gray-600 text-center md:text-left">{label}</p>
    </div>
  );
}
