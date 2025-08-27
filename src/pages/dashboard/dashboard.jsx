import LiveCards from "../../features/livecards/livecards";
import DashboardProvider from "../../features/livecards/context/dashboard-context";

function Dashboard() {
  
  return (
    <DashboardProvider>
      <LiveCards />
    </DashboardProvider>
  );
}

export default Dashboard;
