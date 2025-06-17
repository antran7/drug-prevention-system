import React from 'react';
import { Link } from 'react-router-dom';

const StatCard = ({ icon, label, value, color, link }) => {
  const content = (
    <div
      className="flex items-center p-4 bg-white rounded shadow hover:shadow-lg transition-all cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <div className="text-4xl mr-4">{icon}</div>
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};

export default StatCard;
