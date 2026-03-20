import { useEffect, useState } from "react";

const DebounceSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce logic
  useEffect(() => {
    console.log("useEffect RUN → query:", query);

    const timer = setTimeout(() => {
      console.log("Timer COMPLETED → query:", query);
      setDebouncedQuery(query);
    }, 500);

    return () => {
      console.log("CLEANUP RUN →", query);
      clearTimeout(timer);
    };
  }, [query]);

  // API call
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
        );
        setResults(filtered);
        setLoading(false);
      });
  }, [debouncedQuery]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔍 Debounce Search</h2>
        <p style={styles.subtitle}>
          Type to search users (API call after pause)
        </p>

        <div style={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Search users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.input}
          />
        </div>

        {/*Loading */}
        {loading && <p style={styles.loading}>Loading...</p>}

        {/*Results */}
        {results.length > 0 && (
          <ul style={styles.dropdown}>
            {results.map((user) => (
              <li key={user.id} style={styles.item}>
                <div style={styles.user}>
                  <span style={styles.avatar}>{user.name.charAt(0)}</span>
                  <span>{user.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/*No results */}
        {!loading && debouncedQuery && results.length === 0 && (
          <p style={styles.noResult}>No users found</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
  card: {
    width: "350px",
    padding: "25px",
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
  },
  dropdown: {
    marginTop: "10px",
    listStyle: "none",
    padding: 0,
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    maxHeight: "200px",
    overflowY: "auto",
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #f1f1f1",
    cursor: "pointer",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "#3b82f6",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },
  loading: {
    marginTop: "10px",
    color: "#3b82f6",
  },
  noResult: {
    marginTop: "10px",
    color: "#999",
  },
};

export default DebounceSearch;
