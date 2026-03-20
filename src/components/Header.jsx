import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div style={styles.header}>
      <h2 style={styles.logo}>⚡ React Machine</h2>

      <div style={styles.nav}>
        <Link
          to="/"
          style={{
            ...styles.link,
            ...(pathname === "/" && styles.active),
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/autocomplete"
          style={{
            ...styles.link,
            ...(pathname === "/autocomplete" && styles.active),
          }}
        >
          Autocomplete
        </Link>
      </div>
    </div>
  );
};

const styles = {
  header: {
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
};

export default Header;
