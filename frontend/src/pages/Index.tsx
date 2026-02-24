import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Train, TreePine, Gift, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-metro.jpg";

export default function LandingPage() {
  const features = [
    {
      icon: Train,
      title: "Log Metro Trips",
      description: "Upload your metro ticket and select your stations to log each trip",
    },
    {
      icon: TreePine,
      title: "Track Carbon Savings",
      description: "See how much CO₂ you save by choosing metro over private vehicles",
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Accumulate points and claim exciting rewards at 100+ points",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="eco-gradient">
          <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
                  <Leaf className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">
                    Bangalore Green Metro
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
                  Commute Green,<br />
                  <span className="opacity-80">Get Rewarded</span> 🌱
                </h1>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                  Earn carbon credit rewards every time you ride the Bangalore Metro. 
                  Upload your ticket, track your impact, and claim exciting prizes.
                </p>
                <div className="flex gap-3">
                  <Link to="/register">
                    <Button size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="animate-slide-up hidden md:block">
                <img
                  src={heroImage}
                  alt="Green metro city illustration"
                  className="w-full rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          How It Works
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Three simple steps to start earning rewards for your green commute
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={feature.title} className="shadow-card border-border animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl eco-gradient mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <Card className="eco-gradient border-0 shadow-elevated">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to ride green?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Join thousands of eco-conscious commuters earning rewards every day.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90">
                Create Free Account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Green Metro Rewards — Ride green, earn rewards 🌿</p>
      </footer>
    </div>
  );
}
