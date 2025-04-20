// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-gray-200 text-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2">{description}</p>
  </div>
);

export default ServiceCard;
