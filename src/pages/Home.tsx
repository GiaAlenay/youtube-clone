import { NavBar } from "../components/NavBar";
import Sidebar from "../components/SideBar";

export const Home = () => {
  return (
    <div className="max-h-screen">
      <div style={{ height: "7.5vh" }}>
        <NavBar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
      </div>
    </div>
  );
};
