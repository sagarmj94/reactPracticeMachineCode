import { useNavigate } from "react-router-dom";
import { Search, Timer, Infinity as InfinityIcon } from "lucide-react";
import { Columns } from "lucide-react";

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
    {
      title: "Debounce Search",
      desc: "Optimized search with delay",
      path: "/debounce-search",
      icon: <Timer size={22} />,
      github:
        "https://github.com/sagarmj94/reactPracticeMachineCode/blob/main/src/features/debounceSearch/DebounceSearch.jsx",
    },
    {
      title: "Kanban Board",
      desc: "Visual task management system",
      path: "/kanban",
      icon: <Columns size={20} />,
      github: "your-link",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>⚡ Machine Coding Hub</h2>
      <p style={styles.subheading}>
        Explore real-world frontend features and implementations
      </p>

      <div style={styles.grid}>
        {features.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => navigate(item.path)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Top Row */}
            <div style={styles.topRow}>
              <div style={styles.title}>
                <div style={styles.iconWrapper}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
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

            {/* Description */}
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "20px",
  },
  heading: {
    marginBottom: "5px",
  },
  subheading: {
    color: "#666",
    marginBottom: "25px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  iconWrapper: {
    background: "#eff6ff",
    color: "#3b82f6",
    padding: "8px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    margin: 0,
    fontSize: "16px",
  },
  desc: {
    color: "#555",
    fontSize: "14px",
    marginTop: "8px",
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    background: "#111827",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    transition: "0.2s",
  },
};

export default Dashboard;
