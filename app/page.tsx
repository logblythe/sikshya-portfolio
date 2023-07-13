import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import TabProvider from "./contexts/tab/TabProvider";

const initialTabs = [
  { name: "Home", type: "file", extension: "ts", component: <Home /> },
];

export default function Page() {
  return (
    <TabProvider initialTabs={initialTabs}>
      <Dashboard />
    </TabProvider>
  );
}
