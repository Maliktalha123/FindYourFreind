import { DashboardChart } from "@/components/DashboardChart/DashboarChart";

export default function Dashboard() {
    return (
      <div className="min-h-screen">
       <div className="flex justify-around items-center py-6">
       <h1 className="font-bold text-xl">Dashboard</h1></div>
      <DashboardChart />
      </div>  
    );
  }
  