import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/BuyersProfilePieChart'
import PopularProducts from '../components/PopularProducts'
import { CommunityFeedback, CustomersByDevice } from '../components/CustomersByDevice'
import TopProducts from '../components/RecentOrders'
import PerformanceTracker from '../components/BuyersProfilePieChart'
import ProgressiveBar from '../components/ProgressiveBar'
import Community from '../components/Community'
export default function Dashboard() {
	return (
		<div className='flex flex-row gap-4'>
			<div className="flex flex-col gap-4  w-full " >
				<div className="flex flex-row gap-4  w-[100%]" >
					<DashboardStatsGrid />


				</div>
				<div className="flex flex-row gap-4 w-full" >
					<TransactionChart />

				</div>
				<div className="flex flex-row gap-4 w-full justify-between">
					<TopProducts />

				</div>





			</div>
			<div className="flex flex-col gap-4  w-[40%]">
				<ProgressiveBar />
				<CustomersByDevice />
				<Community />
			</div>

		</div>


	)
}


{/* <div className="flex flex-row gap-4 " >
				<DashboardStatsGrid />
				<ProgressiveBar />
				</div>
			<div className="flex flex-row gap-4 w-full" >
				<TransactionChart />
				
			</div>
			<div className="flex flex-row gap-4 w-full justify-between">
				<TopProducts />
				<CustomersByDevice />
				<CommunityFeedback />
			</div> */}