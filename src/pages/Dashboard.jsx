import { useNavigate } from "react-router-dom";
import { Search, Infinity as InfinityIcon } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Autocomplete Search",
      desc: "Search users with smart suggestions",
      path: "/autocomplete",
      icon: <Search size={22} />,
      github:
        "https://github.com/sagarmj94/reactPracticeMachineCode/blob/main/src/features/autocomplete/Autocomplete.jsx",
    },
    {
      title: "Infinite Scroll",
      desc: "Load data while scrolling",
      path: "/infinite-scroll",
      icon: <InfinityIcon size={22} />,
      github:
        "https://github.com/sagarmj94/reactPracticeMachineCode/blob/main/src/features/infiniteScroll/InfiniteScroll.jsx",
    },
  ];

  return (
    <div>
      <h2 style={styles.heading}>Machine Coding Hub</h2>

      <div style={styles.grid}>
        {features.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => navigate(item.path)}
          >
            <div style={styles.topRow}>
              <div style={styles.title}>
                <span style={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
              </div>

              <button
                style={styles.btn}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(item.github, "_blank");
                }}
              >
                Code ↗
              </button>
            </div>

            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Dashboard;
