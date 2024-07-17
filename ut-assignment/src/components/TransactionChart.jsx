import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		Month: 'Jan',
		Last_year: 5000,
		This_year: 6000,
	},
	{
		Month: 'Feb',
		Last_year: 10000,
		This_year: 2000,
	},
	{
		Month: 'Mar',
		Last_year: 20000,
		This_year: 40000,
	},
	{
		Month: 'Apr',
		Last_year: 32000,
		This_year: 21000,
	},
	{
		Month: 'May',
		Last_year: 12000,
		This_year: 9200,
	},
	{
		Month: 'Jun',
		Last_year: 13000,
		This_year: 8700,
	},
];

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 ">
			<strong className="text-gray-700 font-medium">Comparison</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis dataKey="Month" />
						<YAxis />
						<Tooltip />
						<Legend />
						
						<Bar dataKey="Last_year" fill="skyblue" />
						<Bar dataKey="This_year" fill="blue" />
						
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
