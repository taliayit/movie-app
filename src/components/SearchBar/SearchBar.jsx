import './SearchBar.css'

function SearchBar({ input, onInputChange }) {

    return (
        <input className = "searchbar-input"
        value = { input }
        placeholder = { "Search actor..." }
        onChange = { e => onInputChange(e.target.value) }
        />
    );
}

export default SearchBar;