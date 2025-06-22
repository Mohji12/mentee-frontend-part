import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const ActivityProgress = () => {
  const [selectedVisualization, setSelectedVisualization] = useState('Bar Chart');

  const visualizations = ['Bar Chart', 'Line Chart', 'Pie Chart', 'Radar Chart'];

  const data = [
    { name: 'Aug', total: 3, completed: 2 },
    { name: 'Sep', total: 5, completed: 3 },
    { name: 'Oct', total: 4, completed: 2 },
    { name: 'Nov', total: 3, completed: 1 },
  ];

  const COLORS = ['#d1d5db', '#3b82f6'];

  const renderChart = () => {
    switch (selectedVisualization) {
      case 'Bar Chart':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#d1d5db" name="Total Activities" />
              <Bar dataKey="completed" fill="#3b82f6" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'Line Chart':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#d1d5db" name="Total Activities" />
              <Line type="monotone" dataKey="completed" stroke="#3b82f6" name="Completed" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'Pie Chart':
        const pieData = [
          { name: 'Total Activities', value: data.reduce((a, b) => a + b.total, 0) },
          { name: 'Completed', value: data.reduce((a, b) => a + b.completed, 0) },
        ];
        return (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
      case 'Radar Chart':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart outerRadius={90} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar name="Total" dataKey="total" stroke="#d1d5db" fill="#d1d5db" fillOpacity={0.6} />
              <Radar name="Completed" dataKey="completed" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {/* Select Visualization */}
      <div className="p-4 bg-white rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-2">Select Visualization</h2>
        <div className="grid grid-cols-2 gap-2">
          {visualizations.map((type) => (
            <button
              key={type}
              className={`border py-2 px-4 rounded ${
                selectedVisualization === type
                  ? 'border-yellow-500 text-yellow-600 bg-yellow-100'
                  : 'border-yellow-400 text-yellow-500 hover:bg-yellow-50'
              }`}
              onClick={() => setSelectedVisualization(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Progress Chart */}
      <div className="p-4 bg-white rounded-xl shadow">
        <h2 className="font-semibold text-lg mb-2">Activity Progress</h2>
        {renderChart()}
      </div>
    </div>
  );
};

export default ActivityProgress;
