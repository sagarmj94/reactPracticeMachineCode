import { useEffect, useState } from "react";

const Autocomplete = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      return;
    }

    const result = data.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );

    setFiltered(result);
  }, [query, data]);

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

      {filtered.length > 0 && (
        <div style={styles.dropdown}>
          {filtered.map((user) => (
            <div
              key={user.id}
              style={styles.item}
              onClick={() => setQuery(user.name)}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  dropdown: {
    position: "absolute",
    top: "45px",
    width: "100%",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  item: {
    padding: "10px",
    cursor: "pointer",
  },
};

export default Autocomplete;
