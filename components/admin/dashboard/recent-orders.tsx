"use client";

import { Card } from "@/components/ui/card";
import { Order, User } from "@prisma/client";

interface RecentOrdersProps {
  orders: (Order & { user: User })[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="pb-2 text-left font-medium">Order ID</th>
              <th className="pb-2 text-left font-medium">Customer</th>
              <th className="pb-2 text-left font-medium">Status</th>
              <th className="pb-2 text-left font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2">{order.id.slice(0, 8)}</td>
                <td className="py-2">{order.user.name}</td>
                <td className="py-2">{order.status}</td>
                <td className="py-2">${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}