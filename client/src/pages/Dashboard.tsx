import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { role } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {role === "ADMIN" && <p>Admin controls here</p>}
      {role === "TEACHER" && <p>Teacher controls here</p>}
      {role === "STUDENT" && <p>Student view here</p>}
    </div>
  );
};

export default Dashboard;
