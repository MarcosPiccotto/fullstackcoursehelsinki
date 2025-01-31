const Filter = ({ filterPerson, handleFilterChange }) => {
    return (
        <div>
            filter shown with <input value={filterPerson} onChange={handleFilterChange} />
        </div>
    );
};

export default Filter;
