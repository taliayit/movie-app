import './ActorCard.css'

function ActorCard({actor}) {
    return(
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="card shadow-sm">
                <img src={actor.image} alt=""/>
                <a className="actor-name" href={actor.imdb} target="_blank">{actor.fname} {actor.lname}</a>
                <span className="actor-age">{actor.age()}</span>
            </div>
        </div>
    );
}

export default ActorCard;