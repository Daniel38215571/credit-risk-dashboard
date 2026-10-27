import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

const mockData = [
  { month: 'Jan', expectedLoss: 120000, upperBound: 140000 },
  { month: 'Feb', expectedLoss: 125000, upperBound: 150000 },
  { month: 'Mar', expectedLoss: 135000, upperBound: 160000 },
  { month: 'Apr', expectedLoss: 130000, upperBound: 155000 },
  { month: 'May', expectedLoss: 145000, upperBound: 170000 },
  { month: 'Jun', expectedLoss: 150000, upperBound: 180000 },
];

function App() {
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => { setData(mockData); setLoading(false); }, 1000);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Credit Risk Engine</h1>
        <p>Executive Decision Interface</p>
      </header>

      <div className="kpi-cards">
        <div className="card">
          <h3>Expected Loss</h3>
          <p className="value">$150,000</p>
        </div>
        <div className="card danger">
          <h3>Upper Bound (90%)</h3>
          <p className="value">$180,000</p>
        </div>
        <div className="card success">
          <h3>Safe Capital Reserve</h3>
          <p className="value">$185,000</p>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h2>Loss Forecast</h2>
          <button onClick={fetchData} disabled={loading}>
            {loading ? 'Recalculating...' : 'Run Forecast'}
          </button>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend />
            <Line type="monotone" dataKey="expectedLoss" name="Expected Loss" stroke="#00ffff" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="upperBound" name="90% Confidence Interval" stroke="#ff00ff" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default App;