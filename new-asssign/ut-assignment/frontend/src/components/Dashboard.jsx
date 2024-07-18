import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metrics */}
        <div className="p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Purchases</h2>
          <p className="text-2xl">4,294</p>
          <p className="text-green-500">+32%</p>
        </div>
        <div className="p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl">$322.3k</p>
          <p className="text-green-500">+49%</p>
        </div>
        <div className="p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Refunds</h2>
          <p className="text-2xl">$8.2k</p>
          <p className="text-red-500">-7%</p>
        </div>

        {/* Comparison Chart */}
        <div className="col-span-1 md:col-span-3 p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Comparison</h2>
          <Bar
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'This year',
                  data: [10, 15, 8, 20, 10, 15],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
                {
                  label: 'Last year',
                  data: [5, 10, 5, 15, 5, 10],
                  backgroundColor: 'rgba(153, 102, 255, 0.2)',
                  borderColor: 'rgba(153, 102, 255, 1)',
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

        {/* Performance Score */}
        <div className="p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Performance Score</h2>
          <Doughnut
            data={{
              labels: ['Score'],
              datasets: [
                {
                  label: 'Score',
                  data: [78, 22],
                  backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                  borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              cutoutPercentage: 80,
            }}
          />
          <p className="text-4xl mt-4">78</p>
          <p className="text-sm mt-2">You're good! Your sales performance score is better than 80% other users</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Improve your score</button>
        </div>

        {/* Customers by Device */}
        <div className="col-span-1 md:col-span-2 p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Customers by Device</h2>
          <Line
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

        {/* Community Feedback */}
        <div className="p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Community Feedback</h2>
          <p className="text-base">Mostly positive</p>
          <p className="text-red-500">Negative: 12</p>
          <p>Neutral: 34</p>
          <p className="text-green-500">Positive: 134</p>
        </div>

        {/* Top Products */}
        <div className="col-span-1 md:col-span-3 p-5 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Sold Amount</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Revenue</th>
                  <th className="py-2 px-4">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-4">Camera Mi 360°</td>
                  <td className="py-2 px-4">432</td>
                  <td className="py-2 px-4">$120</td>
                  <td className="py-2 px-4">$51,840</td>
                  <td className="py-2 px-4">4.81</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Massage Gun</td>
                  <td className="py-2 px-4">120</td>
                  <td className="py-2 px-4">$112</td>
                  <td className="py-2 px-4">$25,440</td>
                  <td className="py-2 px-4">3.44</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Vacuum-Mop 2 Pro</td>
                  <td className="py-2 px-4">221</td>
                  <td className="py-2 px-4">$320</td>
                  <td className="py-2 px-4">$15,123</td>
                  <td className="py-2 px-4">3.22</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 px-4">Vacuum-Mop 2</td>
                  <td className="py-2 px-4">223</td>
                  <td className="py-2 px-4">$234</td>
                  <td className="py-2 px-4">$32,812</td>
                  <td className="py-2 px-4">3.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;