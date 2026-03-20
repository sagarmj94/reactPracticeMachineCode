import InfiniteScroll from "../features/infiniteScroll/InfiniteScroll";

const AutocompletePage = () => {
  return (
    <div>
      <h2>Autocomplete Search</h2>
      <p style={{ color: "#666" }}>Start typing to search users</p>

      <div style={{ marginTop: "20px" }}>
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default AutocompletePage;
