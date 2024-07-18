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

export default function Dash() {
    return (
        <div className="flex flex-col gap-4 border border-red-700">
            <div className="flex flex-row gap-4">
                <DashboardStatsGrid />
                <ProgressiveBar />
            </div>
            <div className="flex flex-row gap-4 w-full   border-red-700">
                <TransactionChart />
            </div>
            <div className="flex flex-row gap-4 w-full justify-between  border-red-700">
                <TopProducts />
                <CustomersByDevice />
                <CommunityFeedback />
            </div>
        </div>
    )
}
