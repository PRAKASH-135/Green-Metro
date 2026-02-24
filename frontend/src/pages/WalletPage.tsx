import { useEffect, useState } from "react";
import { walletApi, rewardApi } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Wallet, Gift, Coins, AlertCircle } from "lucide-react";

export default function WalletPage() {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const { toast } = useToast();

  const fetchBalance = async () => {
    try {
      const res = await walletApi.getBalance();
      setBalance(res.data.balance);
    } catch {
      toast({ title: "Failed to load wallet", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const handleClaim = async () => {
    setClaiming(true);
    try {
      const res = await rewardApi.claimReward();
      toast({ title: "Reward Claimed! 🎉", description: res.data.message });
      setBalance(res.data.remainingBalance);
    } catch (err: any) {
      toast({
        title: "Cannot claim reward",
        description: err.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setClaiming(false);
    }
  };

  const canClaim = balance >= 100;
  const progress = Math.min((balance / 100) * 100, 100);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-lg mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl eco-gradient mb-4">
            <Wallet className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Your Wallet</h1>
          <p className="text-muted-foreground mt-1">Track your rewards and claim prizes</p>
        </div>

        {/* Balance Card */}
        <Card className="shadow-elevated border-border mb-6 overflow-hidden">
          <div className="eco-gradient p-6 text-center">
            <p className="text-primary-foreground/80 text-sm font-medium mb-1">Current Balance</p>
            <p className="text-5xl font-extrabold text-primary-foreground">
              {loading ? "..." : balance}
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">reward points</p>
          </div>
          <CardContent className="p-5">
            {/* Progress to next claim */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress to claim</span>
                <span className="font-semibold text-foreground">{Math.min(balance, 100)}/100</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full eco-gradient rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Button
              onClick={handleClaim}
              disabled={!canClaim || claiming}
              className={`w-full ${canClaim ? "eco-gradient text-primary-foreground" : ""}`}
              variant={canClaim ? "default" : "secondary"}
            >
              <Gift className="w-4 h-4 mr-2" />
              {claiming ? "Claiming..." : canClaim ? "Claim Reward (100 pts)" : `Need ${100 - balance} more points`}
            </Button>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="shadow-card border-border">
            <CardContent className="p-4 text-center">
              <Coins className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Earn Rate</p>
              <p className="font-bold text-foreground">10 pts/kg CO₂</p>
            </CardContent>
          </Card>
          <Card className="shadow-card border-border">
            <CardContent className="p-4 text-center">
              <AlertCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">Min. Claim</p>
              <p className="font-bold text-foreground">100 points</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
