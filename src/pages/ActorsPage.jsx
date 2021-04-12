import { useState } from "react";
import ActorModel from "../models/ActorModel";
import { Container } from 'react-bootstrap';
import ActorCard from "../components/ActorCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";

function ActorsPage(props) {
    var actorsData = [
        new ActorModel("Julia", "Roberts", "1967-10-28", "https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000210/?ref_=nmls_hd"),
        new ActorModel("George", "Clooney", "1961-05-06", "https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000123/?ref_=nmls_pst"),
        new ActorModel("Leonardo", "DiCaprio", "1974-11-11", "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000138/?ref_=nmls_pst"),
        new ActorModel("Will", "Smith", "1968-09-25", "https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000226/?ref_=nmls_pst")
    ];

    const [input, setInput] = useState('');
    const [sort, setSort] = useState('Sort');
    const [actors, setActors] = useState(actorsData);

    const updateInput = (input) => {
        const filtered = actorsData.filter(actor => {
            return (actor.fname.toLowerCase().includes(input.toLowerCase())) || (actor.lname.toLowerCase().includes(input.toLowerCase()));
        });
        setInput(input);
        setActors(filtered);
    }

    const updateSort = (sort) => {
        setSort(sort);
        // setActors(sorted);
    }

    const actorsCards = actors.map(actor => <ActorCard actor={actor}/>);
    
    return (
        <Container className="p-actors">
            <div className="row">
                <SearchBar input={input} onInputChange={updateInput}/>
                <SortDropdown selected={sort} onSortChange={updateSort}/>
            </div>
            <div className="row">
                {actorsCards}
            </div>
        </Container>
    );
}

export default ActorsPage;