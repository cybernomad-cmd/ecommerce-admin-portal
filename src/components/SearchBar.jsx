import "./SearchBar.css";

function SearchBar({ value, onChange, resultCount, showCount }) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search by name or category…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search products"
          className="search-input"
        />
        {value && (
          <button className="search-clear" onClick={() => onChange("")} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>
      {showCount && (
        <span className="search-count">
          {resultCount} product{resultCount !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}

export default SearchBar;