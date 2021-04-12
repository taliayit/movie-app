const SearchBar = ({ keyword, setKeyword }) => {
    const BarStyling = { width: "100%", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    return ( <
        input style = { BarStyling }
        value = { keyword }
        placeholder = { "Search actor..." }
        onChange = { e => setKeyword(e.target.value) }
        />
    );
}

export default SearchBar;