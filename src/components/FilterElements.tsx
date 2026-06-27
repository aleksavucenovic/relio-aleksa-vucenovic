
function FilterElements() {

    return (
        <div className="filters">
            <div className="filter-group">
                <span>Search</span>
                <input
                    type="text"
                    className="search-input"
                />
            </div>

            <div className="filter-group">
                <span>Filter</span>
                <select className="filter-select">
                    <option value="no_filter">No filter</option>
                    <option value="100">&gt; 100</option>
                    <option value="2500">&gt; 2500</option>
                    <option value="10000">&gt; 10000</option>
                </select>
            </div>
        </div>
    );
}

export default FilterElements;