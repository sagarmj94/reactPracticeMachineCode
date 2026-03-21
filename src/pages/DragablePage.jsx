import React from "react";
import DragDropBoard from "../features/dragable/dragable";

const DragablePage = () => {
  return (
    <div>
      <h2>Autocomplete Search</h2>
      <p style={{ color: "#666" }}>Start typing to search users</p>

      <div style={{ marginTop: "20px" }}>
        <DragDropBoard />
      </div>
    </div>
  );
};

export default DragablePage;
