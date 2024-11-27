"use client";

import { Card } from "@/components/ui/card";

interface StatsCardsProps {
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
}

export function StatsCards({ totalOrders, totalProducts, totalCustomers }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Total Orders</h3>
        <p className="mt-2 text-3xl font-bold">{totalOrders}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Total Products</h3>
        <p className="mt-2 text-3xl font-bold">{totalProducts}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Total Customers</h3>
        <p className="mt-2 text-3xl font-bold">{totalCustomers}</p>
      </Card>
    </div>
  );
}