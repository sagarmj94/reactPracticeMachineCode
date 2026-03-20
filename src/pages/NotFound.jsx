import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn’t exist.</p>

      <button style={styles.btn} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  code: {
    fontSize: "80px",
    margin: 0,
    color: "#3b82f6",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#3b82f6",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default NotFound;
