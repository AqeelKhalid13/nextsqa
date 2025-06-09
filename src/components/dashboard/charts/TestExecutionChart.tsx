
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', passed: 45, failed: 5, skipped: 2 },
  { name: 'Tue', passed: 52, failed: 3, skipped: 1 },
  { name: 'Wed', passed: 48, failed: 7, skipped: 3 },
  { name: 'Thu', passed: 61, failed: 2, skipped: 1 },
  { name: 'Fri', passed: 55, failed: 4, skipped: 2 },
  { name: 'Sat', passed: 38, failed: 1, skipped: 0 },
  { name: 'Sun', passed: 42, failed: 2, skipped: 1 },
];

export function TestExecutionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="name" 
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
        <Line type="monotone" dataKey="passed" stroke="#10b981" strokeWidth={2} />
        <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} />
        <Line type="monotone" dataKey="skipped" stroke="#f59e0b" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
