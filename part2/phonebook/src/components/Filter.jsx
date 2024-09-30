import { Button } from "./Button"

// eslint-disable-next-line react/prop-types
const Filter = ({ filterValue, handleFilterChange }) => {

    return (
        <form >
            <div>
                filter: <input
                    value={filterValue}
                    onChange={handleFilterChange}
                    placeholder='search contacts' />
            </div>
            <Button title="search" />
        </form>
    )
}

export { Filter }