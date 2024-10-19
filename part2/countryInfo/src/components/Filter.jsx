
const Filter = ({ filterValue, handleFilterChange }) => {
    return (
        <forn>
            <input
                value={filterValue}
                onChange={handleFilterChange}
                placeholder="search for a country">
            </input>
        </forn>
    )
}

export { Filter }