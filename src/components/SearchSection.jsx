const SearchSection = ({ city, setCity, handleSearch }) => {
    return (
        <header className="input-container">
            <input
                className="city-input"
                placeholder="Enter City Name"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleSearch}
            />
            <button className="search-button" onClick={handleSearch} aria-label="Search">
                <span className="material-symbols-outlined">search</span>
            </button>
        </header>
    );
};

export default SearchSection;