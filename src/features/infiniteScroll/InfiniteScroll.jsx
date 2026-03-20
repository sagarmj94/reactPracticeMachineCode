import React from "react";

const InfiniteScroll = () => {
  return (
    <div>
      <div key={"item.id"} style={styles.card}>
        <h4>{"item.title"}</h4>
        <p>{"item.body"}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default InfiniteScroll;
