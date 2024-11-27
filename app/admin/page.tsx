import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { StatsCards } from "@/components/admin/dashboard/stats-cards";
import { SalesChart } from "@/components/admin/dashboard/sales-chart";
import { RecentOrders } from "@/components/admin/dashboard/recent-orders";

export const dynamic = "force-dynamic";

async function getDashboardData() {
  const [totalOrders, totalProducts, totalCustomers, recentOrders] = await Promise.all([
    prisma.order.count(),
    prisma.product.count(),
    prisma.user.count(),
    prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { user: true },
    }),
  ]);

  return {
    totalOrders,
    totalProducts,
    totalCustomers,
    recentOrders,
  };
}

export default async function AdminDashboard() {
  const dashboardData = await getDashboardData();

  return (
    <div className="space-y-8">
      <StatsCards
        totalOrders={dashboardData.totalOrders}
        totalProducts={dashboardData.totalProducts}
        totalCustomers={dashboardData.totalCustomers}
      />
      
      <Suspense fallback={<div>Loading chart...</div>}>
        <SalesChart />
      </Suspense>

      <Suspense fallback={<div>Loading orders...</div>}>
        <RecentOrders orders={dashboardData.recentOrders} />
      </Suspense>
    </div>
  );
}