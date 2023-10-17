import Map from "../components/Map";
import User from "../components/User";
import Sidebar from "../components/sidebar";
import { useAuth } from "../contexts/AuthContext";
import styles from "./AppLayout.module.css";
function AppLayout() {
  // const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
