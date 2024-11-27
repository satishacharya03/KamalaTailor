import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ProductGrid } from "@/components/product-grid";

export default async function WishlistPage() {
  const session = await auth();
  
  if (!session) {
    redirect("/auth/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      wishlist: {
        include: {
          category: true,
        },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Wishlist</h2>
        <p className="text-muted-foreground">
          Products you've saved for later
        </p>
      </div>

      {user?.wishlist && user.wishlist.length > 0 ? (
        <ProductGrid products={user.wishlist} />
      ) : (
        <div className="text-center">
          <p className="text-muted-foreground">Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
}