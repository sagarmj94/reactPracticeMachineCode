import React, { useEffect, useState } from "react";

export const Autocomplete = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      return;
    }

    const result = data.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );

    setFiltered(result);
  }, [query, data]);

  console.log(filtered);
  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        style={{ width: "100%", padding: "10px" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((user) => (
          <li
            key={user.id}
            style={{ padding: "8px", cursor: "pointer" }}
            onClick={() => setQuery(user.name)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
