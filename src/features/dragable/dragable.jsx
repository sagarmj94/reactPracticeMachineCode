import { useState } from "react";

const DragDropBoard = () => {
  const [lists, setLists] = useState({
    doing: [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Build Drag UI" },
    ],
    done: [{ id: 3, text: "Setup Project" }],
  });

  const [dragItem, setDragItem] = useState(null);
  const [sourceList, setSourceList] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleDragStart = (item, listName, index) => {
    setDragItem({ ...item, index });
    setSourceList(listName);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (targetList, targetIndex = null) => {
    if (!dragItem) return;

    const updated = { ...lists };

    updated[sourceList].splice(dragItem.index, 1);

    if (targetIndex !== null) {
      updated[targetList].splice(targetIndex, 0, dragItem);
    } else {
      updated[targetList].push(dragItem);
    }

    setLists(updated);
    setDragItem(null);
    setSourceList(null);
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    const updated = { ...lists };
    updated.doing.push({
      id: Date.now(),
      text: newTask,
    });

    setLists(updated);
    setNewTask("");
  };

  const renderList = (key, title, color) => (
    <div
      onDragOver={handleDragOver}
      onDrop={() => handleDrop(key)}
      style={{
        flex: 1,
        padding: "16px",
        borderRadius: "16px",
        background: color,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        minHeight: "400px",
        transition: "0.3s",
      }}
    >
      <h2 style={{ marginBottom: "12px" }}>{title}</h2>

      {lists[key].map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item, key, index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(key, index)}
          style={{
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            cursor: "grab",
            transition: "0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {item.text}
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #eef2f3, #dfe9f3)",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🚀 Task Board
      </h1>

      {/* Add Task */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Board */}
      <div style={{ display: "flex", gap: "20px" }}>
        {renderList("doing", "🟡 Doing", "#fff7cc")}
        {renderList("done", "🟢 Done", "#d4f8d4")}
      </div>
    </div>
  );
};

export default DragDropBoard;
