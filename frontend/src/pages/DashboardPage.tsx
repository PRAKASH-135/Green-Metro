import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { walletApi } from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Train, Wallet, Gift, TrendingUp, TreePine } from "lucide-react";

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      walletApi.getBalance().then((res) => setBalance(res.data.balance)).catch(() => {});
    }
  }, [isAuthenticated]);

  const stats = [
    {
      icon: Wallet,
      label: "Wallet Balance",
      value: balance !== null ? `${balance} pts` : "—",
      color: "text-primary",
      bg: "bg-secondary",
    },
    {
      icon: TreePine,
      label: "Carbon Saved",
      value: "Go green!",
      color: "text-primary",
      bg: "bg-secondary",
    },
    {
      icon: TrendingUp,
      label: "Reward Rate",
      value: "10 pts/kg",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  const actions = [
    {
      icon: Train,
      title: "Log a Trip",
      description: "Upload your metro ticket and earn rewards",
      link: "/logtrip",
      gradient: true,
    },
    {
      icon: Wallet,
      title: "View Wallet",
      description: "Check your balance and claim rewards",
      link: "/wallet",
      gradient: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="eco-gradient px-4 pt-12 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
            <Leaf className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Green Metro Rewards</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Ride Green,{" "}
            <span className="opacity-80">Earn Rewards</span> 🌱
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Every metro trip reduces carbon emissions. Log your trips, earn points, and redeem exciting rewards.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-card border-border animate-slide-up">
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-4xl mx-auto px-4 mt-10 pb-16">
        <h2 className="text-xl font-bold text-foreground mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action) => (
            <Link key={action.title} to={action.link}>
              <Card className="shadow-card border-border hover:shadow-elevated transition-shadow cursor-pointer group">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`p-3 rounded-xl ${action.gradient ? "eco-gradient" : "bg-secondary"}`}>
                    <action.icon
                      className={`w-6 h-6 ${action.gradient ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <Card className="mt-8 shadow-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-3 rounded-xl shrink-0">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">How It Works</h3>
                <ol className="text-sm text-muted-foreground space-y-1.5 list-decimal list-inside">
                  <li>Take a metro ride and keep your ticket</li>
                  <li>Upload a photo of your ticket with start & end stations</li>
                  <li>Earn reward points based on carbon saved</li>
                  <li>Claim rewards when you reach 100+ points</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
