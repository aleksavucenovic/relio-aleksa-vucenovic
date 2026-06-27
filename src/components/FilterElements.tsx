import { useEffect, useState } from "react";


type FilterElementsProps = {
    filterElements: (searchParams: string, filter: string) => void;
};

const FilterElements = ({
    filterElements
}: FilterElementsProps) => {

    const [searchParams, setSearchParams] = useState<string>('');
    const [filter, setFilter] = useState<string>('no_filter');

    const handleSearchChange = (newSearchParams: string, newFilter: string) => {
        filterElements(newSearchParams, newFilter)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleSearchChange(searchParams, filter);
        }, 600);

        return () => clearTimeout(timeout);
    }, [searchParams, filter]);


    return (
        <div className="filters">
            <div className="filter-group">
                <span>Search</span>
                <input
                    type="text"
                    className="search-input"
                    value={searchParams}
                    onChange={(e) => {
                        setSearchParams(e.target.value)
                    }}
                />
            </div>

            <div className="filter-group">
                <span>Filter</span>
                <select
                    className="filter-select"
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value)
                    }}
                >
                    <option value="no_filter">No filter</option>
                    <option value="100">&gt; 100</option>
                    <option value="250">&gt; 250</option>
                    <option value="500">&gt; 500</option>
                    <option value="1000">&gt; 1000</option>
                    <option value="2500">&gt; 2500</option>
                    <option value="10000">&gt; 10000</option>
                </select>
            </div>
        </div>
    );
}

export default FilterElements;