class ActorModel {
    constructor(fname, lname, bday, image, imdb) {
        this.fname = fname;
        this.lname = lname;
        this.bday = bday;
        this.image = image;
        this.imdb = imdb;
    }

    age() {
        const currentYear = new Date().getFullYear();
        const bornYear = this.bday.split('-')[0];
        return currentYear - bornYear;
    }
}

export default ActorModel;