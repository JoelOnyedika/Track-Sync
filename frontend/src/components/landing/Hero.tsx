import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Track Sync
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Discover a world of possibilities with our innovative
                      solutions. We're here to help you achieve your goals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      to="/get-started"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/learn-more"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <img
                  src="/path/to/hero-image.jpg"
                  width="200"
                  height="550"
                  alt="Hero image showcasing our platform"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>

          {/* Features section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-slate-700">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-black font-bold text-sm">
                    What We Offer
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Our Key Features
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore the powerful features that set us apart from the
                    competition.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
                {[
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    description:
                      "Round-the-clock assistance for all your needs.",
                  },
                  {
                    icon: Star,
                    title: "Premium Quality",
                    description: "Top-notch services that exceed expectations.",
                  },
                  {
                    icon: ArrowRight,
                    title: "Easy Integration",
                    description:
                      "Seamless integration with your existing systems.",
                  },
                ].map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black font-bold">
                    Customer Stories
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our satisfied
                    customers have to say.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
                {[
                  {
                    avatar: "/avatars/user1.jpg",
                    name: "John Doe",
                    position: "CEO, TechCorp",
                    rating: 5,
                    comment: "Incredible service! Highly recommended.",
                  },
                  {
                    avatar: "/avatars/user2.jpg",
                    name: "Jane Smith",
                    position: "CTO, Innovate Inc.",
                    rating: 4,
                    comment: "Great features and support team.",
                  },
                  {
                    avatar: "/avatars/user3.jpg",
                    name: "Mike Johnson",
                    position: "Founder, StartUp Co.",
                    rating: 5,
                    comment: "Game-changer for our business.",
                  },
                ].map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-slate-700">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers and take your business
                  to the next level.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button variant="default" type="submit">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our{" "}
                  <Link to="/terms" className="underline underline-offset-2">
                    Terms and Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// FeatureCard and TestimonialCard components remain the same

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="grid gap-1">
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Link
        to="#"
        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}

function TestimonialCard({ avatar, name, position, rating, comment }) {
  return (
    <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-500" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{comment}</p>
      </div>
    </div>
  );
}
