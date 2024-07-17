import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyersProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import { CommunityFeedback, CustomersByDevice } from '../components/CustomersByDevice'
import TopProducts from '../components/RecentOrders'
import PerformanceTracker from '../components/BuyersProfilePieChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4 " >
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full" >
				<TransactionChart />
				<PerformanceTracker/>
			</div>
			<div className="flex flex-row gap-4 w-full justify-between">
				<TopProducts />
				<CustomersByDevice />
				{/* <CommunityFeedback /> */}
			</div>
		</div>
	)
}