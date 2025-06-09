
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', coverage: 82, defectRate: 2.1, passRate: 94 },
  { month: 'Feb', coverage: 85, defectRate: 1.8, passRate: 96 },
  { month: 'Mar', coverage: 87, defectRate: 1.5, passRate: 97 },
  { month: 'Apr', coverage: 89, defectRate: 1.2, passRate: 98 },
  { month: 'May', coverage: 87, defectRate: 1.4, passRate: 97 },
  { month: 'Jun', coverage: 90, defectRate: 1.1, passRate: 98 },
];

export function QualityMetricsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="month" 
          tick={{ fill: 'hsl(var(--foreground))' }}
          axisLine={{ stroke: 'hsl(var(--border))' }}
        />
        <YAxis 
          tick={{ fill: 'hsl(var(--foreground))' }}
          axisLine={{ stroke: 'hsl(var(--border))' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--background))', 
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px',
            color: 'hsl(var(--foreground))'
          }}
        />
        <Bar dataKey="coverage" fill="#3b82f6" name="Test Coverage %" />
        <Bar dataKey="passRate" fill="#10b981" name="Pass Rate %" />
      </BarChart>
    </ResponsiveContainer>
  );
}
