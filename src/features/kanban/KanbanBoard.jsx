import { useState } from "react";
import { Plus } from "lucide-react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", status: "todo" },
    { id: 2, text: "Build Autocomplete", status: "inprogress" },
    { id: 3, text: "Deploy App", status: "done" },
  ]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, { id: Date.now(), text: input, status: "todo" }]);
    setInput("");
  };

  const moveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const columns = [
    { key: "todo", title: "To Do", color: "#f59e0b" },
    { key: "inprogress", title: "In Progress", color: "#3b82f6" },
    { key: "done", title: "Done", color: "#10b981" },
  ];

  return (
    <div style={styles.wrapper}>
      {/* Add Task */}
      <div style={styles.addBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          <Plus size={16} /> Add
        </button>
      </div>

      {/* Board */}
      <div style={styles.board}>
        {columns.map((col) => {
          const columnTasks = tasks.filter((task) => task.status === col.key);

          return (
            <div key={col.key} style={styles.column}>
              {/* Column Header */}
              <div
                style={{
                  ...styles.columnHeader,
                  borderTop: `4px solid ${col.color}`,
                }}
              >
                <h3>{col.title}</h3>
                <span style={styles.count}>{columnTasks.length}</span>
              </div>

              {/* Cards */}
              {columnTasks.map((task) => (
                <div
                  key={task.id}
                  style={{
                    ...styles.card,
                    borderLeft: `4px solid ${col.color}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.05)";
                  }}
                >
                  <div style={styles.cardContent}>
                    <p style={styles.cardText}>{task.text}</p>
                  </div>

                  <div style={styles.actions}>
                    {col.key !== "todo" && (
                      <button
                        style={styles.actionBtn}
                        onClick={() => moveTask(task.id, "todo")}
                      >
                        ←
                      </button>
                    )}

                    {col.key !== "done" && (
                      <button
                        style={styles.actionBtnPrimary}
                        onClick={() =>
                          moveTask(
                            task.id,
                            col.key === "todo" ? "inprogress" : "done",
                          )
                        }
                      >
                        →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "20px",
  },
  addBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "10px 15px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  board: {
    display: "flex",
    gap: "20px",
  },
  column: {
    flex: 1,
    background: "#f9fafb",
    padding: "15px",
    borderRadius: "12px",
    minHeight: "350px",
  },
  columnHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  count: {
    background: "#e5e7eb",
    padding: "4px 10px",
    borderRadius: "10px",
    fontSize: "12px",
  },
  card: {
    background: "#fff",
    padding: "14px",
    borderRadius: "12px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "all 0.25s ease",
  },
  cardContent: {
    marginBottom: "10px",
  },

  cardText: {
    fontSize: "14px",
    color: "#111827",
    fontWeight: "500",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  actionBtn: {
    border: "none",
    background: "#e5e7eb",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cardContent: {
    marginBottom: "10px",
  },

  cardText: {
    fontSize: "14px",
    color: "#111827",
    fontWeight: "500",
  },
};

export default KanbanBoard;
