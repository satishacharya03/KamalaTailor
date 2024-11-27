import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default async function OrdersPage() {
  const session = await auth();
  
  if (!session) {
    redirect("/auth/login");
  }

  const orders = await prisma.order.findMany({
    where: { userId: session.user.id },
    include: {
      products: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Orders</h2>
        <p className="text-muted-foreground">
          View and track your orders
        </p>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium">Order #{order.id.slice(0, 8)}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(order.createdAt), "PPP")}
                  </p>
                </div>
                <Badge>{order.status}</Badge>
              </div>
              <div className="space-y-2">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between"
                  >
                    <span>{product.name}</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">${order.total.toFixed(2)}</span>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-muted-foreground">You haven't placed any orders yet</p>
        </div>
      )}
    </div>
  );
}