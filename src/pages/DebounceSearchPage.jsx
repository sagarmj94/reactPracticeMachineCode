import DebounceSearch from "../features/debounceSearch/DebounceSearch";

const DebounceSearchPage = () => {
  return (
    <div>
      <h2>Debounce Search</h2>
      <p>Search with delay to reduce API calls</p>

      <div style={{ marginTop: "20px" }}>
        <DebounceSearch />
      </div>
    </div>
  );
};

export default DebounceSearchPage;
