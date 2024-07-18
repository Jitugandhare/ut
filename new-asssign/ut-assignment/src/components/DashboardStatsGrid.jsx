import React from 'react'


export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-2  w-[100%] ">
			<BoxWrapper>

				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Purchases</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">4294</strong>
						<span className="text-sm text-green-500 pl-2">+32%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>

				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Revenue</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$322,3k</strong>
						<span className="text-sm text-green-500 pl-2">+49%</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>

				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Refunds</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$8,2k</strong>
						<span className="text-sm text-red-500 pl-2">+7</span>
					</div>
				</div>
			</BoxWrapper>

		</div>
	)
}

// function BoxWrapper({ children }) {
// 	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-300 flex items-center ">{children}</div>
// }
function BoxWrapper({ children }) {
	return (
	  <div className="bg-white rounded-sm p-4 flex-1 border border-gray-300 flex items-center" style={{ width: '70%' }}>
		{children}
	  </div>
	);
  }
  
  