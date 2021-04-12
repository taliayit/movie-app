function ActorCard({actor}) {
    return(
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div className="card">
                <img src={actor.image} alt=""/>
                <a href={actor.imdb} target="_blank">{actor.fname} {actor.lname}</a>
                {/* <h5>{actor.fname} {actor.lname}</h5> */}
                <p>{actor.age()}</p>
            </div>
        </div>
    );
}

export default ActorCard;