import AppRoutes from "routes/Routes";
import { TopNavbar, Sidebar } from "@components";

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="app__main">
        <TopNavbar />
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
