import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const isDashboard = pathname === "/";

  return (
    <div style={styles.header}>
      <Link
        to="/"
        style={styles.logoLink}
        onClick={(e) => {
          if (isDashboard) e.preventDefault(); // ❌ prevent reload if already on home
        }}
      >
        <h2 style={styles.logo}>⚡ React Machine Coding</h2>
      </Link>

      <div style={styles.nav}>
        <Link
          to="/"
          style={{
            ...styles.link,
            ...(isDashboard && styles.active),
            ...(isDashboard && styles.disabled),
          }}
          onClick={(e) => {
            if (isDashboard) {
              e.preventDefault();
            }
          }}
        >
          Practice
        </Link>
      </div>
    </div>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#1e293b",
    color: "#fff",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    padding: "8px 14px",
    borderRadius: "6px",
    color: "#cbd5f5",
  },
  active: {
    background: "#3b82f6",
    color: "#fff",
  },
  disabled: {
    display: "none",
    cursor: "not-allowed",
    opacity: 0.6,
  },
};

export default Header;
