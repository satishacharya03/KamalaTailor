import { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us | Modern Shop",
  description: "Learn more about Modern Shop and our mission",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Modern Shop</h1>
          <p className="text-lg text-muted-foreground">
            Modern Shop is your premier destination for contemporary fashion and
            lifestyle products. Founded with a vision to provide high-quality,
            trendsetting items at accessible prices.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              To deliver exceptional shopping experiences through carefully curated
              products, outstanding customer service, and a commitment to
              sustainability.
            </p>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-bold">Why Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-2 text-xl font-semibold">Quality Products</h3>
            <p className="text-muted-foreground">
              We carefully select each item to ensure the highest quality standards.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 text-xl font-semibold">Fast Shipping</h3>
            <p className="text-muted-foreground">
              Quick and reliable delivery to your doorstep worldwide.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
            <p className="text-muted-foreground">
              Our customer service team is always here to help you.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-3xl font-bold">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              name: "John Doe",
              role: "CEO & Founder",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            },
            {
              name: "Jane Smith",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            },
            {
              name: "Mike Johnson",
              role: "Head of Design",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            },
            {
              name: "Sarah Williams",
              role: "Customer Relations",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            },
          ].map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}