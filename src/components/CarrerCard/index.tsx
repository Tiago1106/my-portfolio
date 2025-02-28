import React from 'react';

interface CareerCardProps {
  title: string;
  duration: string;
  company: string;
  companyUrl?: string;
  description: string[];
}

const CareerCard: React.FC<CareerCardProps> = ({ title, duration, company, companyUrl, description }) => {
  return (
    <div className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
      {companyUrl ? (
        <a 
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-600 mb-2 hover:text-blue-500 transition-colors"
        >
          {company}
        </a>
      ) : (
        <span className="text-gray-600 mb-2">{company}</span>
      )}
      <ul className="list-disc list-inside text-sm text-gray-600">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;