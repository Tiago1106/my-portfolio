import React from 'react';

interface TechnologyCardProps {
  imgSrc: string;
  altText: string;
  label: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ imgSrc, altText, label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
        <img src={imgSrc} alt={altText} className="w-10 h-10" />
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
};

export default TechnologyCard;