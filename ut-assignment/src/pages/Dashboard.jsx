import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'

import {  CustomersByDevice } from '../components/CustomersByDevice'
import TopProducts from '../components/RecentOrders'
import PerformanceTracker from '../components/BuyersProfilePieChart'
import ProgressiveBar from '../components/ProgressiveBar'
import Community from '../components/Community'
export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4 " >
			<div className="flex flex-row gap-4 " >
				<DashboardStatsGrid className=" h-20"/>
				<ProgressiveBar />
				</div>
			<div className="flex flex-row gap-4 w-full" >
				<TransactionChart />
				{/* <PerformanceTracker /> */}
			</div>
			<div className="flex flex-row gap-4 w-full justify-between">
				<TopProducts />
				<CustomersByDevice />
				<Community />
			</div>
		</div>
	)
}