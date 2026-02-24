import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tripApi } from "@/services/api";
import { stations } from "@/data/stations";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Train, Upload, MapPin, CheckCircle } from "lucide-react";

export default function LogTripPage() {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [ticket, setTicket] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!startStation || !endStation) {
      toast({ title: "Select both stations", variant: "destructive" });
      return;
    }
    if (!ticket) {
      toast({ title: "Upload your ticket image", variant: "destructive" });
      return;
    }
    if (startStation === endStation) {
      toast({ title: "Start and end stations must be different", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("startStation", startStation);
      formData.append("endStation", endStation);
      formData.append("ticket", ticket);

      const res = await tripApi.logTrip(formData);
      toast({
        title: "Trip Logged! 🎉",
        description: `Earned ${res.data.trip?.rewardEarned?.toFixed(1) || ""} points`,
      });
      navigate("/wallet");
    } catch (err: any) {
      toast({
        title: "Failed to log trip",
        description: err.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-lg mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl eco-gradient mb-4">
            <Train className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Log Your Trip</h1>
          <p className="text-muted-foreground mt-1">Upload your metro ticket to earn rewards</p>
        </div>

        <Card className="shadow-card border-border">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Start Station
                </Label>
                <Select value={startStation} onValueChange={setStartStation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select departure station" />
                  </SelectTrigger>
                  <SelectContent>
                    {stations.map((s) => (
                      <SelectItem key={s.name} value={s.name}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  End Station
                </Label>
                <Select value={endStation} onValueChange={setEndStation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select arrival station" />
                  </SelectTrigger>
                  <SelectContent>
                    {stations.map((s) => (
                      <SelectItem key={s.name} value={s.name}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-primary" />
                  Ticket Image
                </Label>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => setTicket(e.target.files?.[0] || null)}
                  />
                  {ticket ? (
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{ticket.name}</span>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click or drag to upload your metro ticket
                      </p>
                    </>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full eco-gradient text-primary-foreground"
                disabled={loading}
              >
                {loading ? "Processing ticket..." : "Submit Trip"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
