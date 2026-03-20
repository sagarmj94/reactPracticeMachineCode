import { Link } from "react-router-dom";

const Dashboard = () => {
  const features = [{ name: "Autocomplete Search", path: "/autocomplete" }];

  return (
    <div>
      <h2>Dashboard</h2>

      <ul>
        {features.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
