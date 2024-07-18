import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CustomersByDevice = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="col-span-1 md:col-span-2 p-5 bg-white rounded shadow w-[100%]">
      <h2 className="text-lg font-semibold mb-4">Customers by Device</h2>
      <Line
        ref={chartRef}
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Web sales',
              data: [0, 1, 3, 5, 7, 8],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Offline selling',
              data: [0, 2, 4, 5, 6, 7],
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export const CommunityFeedback = () => {
  return (
    <div className="p-5 bg-white rounded shadow">
      <h2 className="text-lg font-semibold">Community Feedback</h2>
      <p className="text-base">Mostly positive</p>
      <p className="text-red-500">Negative: 12</p>
      <p>Neutral: 34</p>
      <p className="text-green-500">Positive: 134</p>
    </div>
  );
};