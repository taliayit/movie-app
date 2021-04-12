function SearchBar({ input, onInputChange }) {
    const BarStyling = { width: "100%", background: "#F2F1F9", border: "none", padding: "0.5rem" };

    return ( <
        input style = { BarStyling }
        value = { input }
        placeholder = { "Search actor..." }
        onChange = { e => onInputChange(e.target.value) }
        />
    );
}

export default SearchBar;