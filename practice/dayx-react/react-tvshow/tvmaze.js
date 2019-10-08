class Episode {
    constructor( episodeSeason, episodeImage, episodeTitle, episodeNum, episodeDate, episodeDesc ) {
        this.episodeSeason = episodeSeason;
        this.episodeImage = episodeImage;
        this.episodeTitle = episodeTitle;
        this.episodeNum = episodeNum;
        this.episodeDate = episodeDate;
        this.episodeDesc = episodeDesc;
    }

    render() {
        this.episodeCard = document.createElement( 'div' );
        this.episodeCard.className = 'episode-card';
        this.episodeCard.innerHTML =
            `
            <div class="episode-image">
                <img src="${this.episodeImage}" alt="${this.episodeTitle}">
            </div>
            <div class="episode-info">
                <h2 class="episode-title">${this.episodeTitle}</h2>
                ${this.episodeDesc}
                <div class="episode-info__bottom">
                    <p class="episode-number">Episode: ${this.episodeNum}</p>
                    <p class="episode-date">Date: ${this.episodeDate}</p>
                </div>
            </div>
            `;
    }

    mount() {
        this.render();

        if ( document.querySelector( `.season-${this.episodeSeason}__divider` ) === null ) {
            console.log( 'season divider does not exist...creating...' )
            this.seasonDivider = document.createElement( 'section' );
            this.seasonDivider.className = `season-${this.episodeSeason}__divider`;
            this.seasonDivider.innerHTML = `<h2 class="season-header">Season ${this.episodeSeason}</h2>`;
            document.querySelector( '.episode-list' ).appendChild( this.seasonDivider );
        }

        document.querySelector( `.season-${this.episodeSeason}__divider` ).appendChild( this.episodeCard );
    }

    update() {
        console.log( 'Please update me hur hur hur XD!' )
    }
}

fetch( 'http://api.tvmaze.com/singlesearch/shows?q=dark&embed=episodes' )
    .then( response => response.json() )
    .then( data => data._embedded.episodes.forEach( ( epi ) => {
        const episodeSeason = epi.season;
        const episodeImage = epi.image.medium;
        const episodeTitle = epi.name;
        const episodeNum = epi.number;
        const episodeDate = epi.airdate;
        const episodeDesc = epi.summary;

        const theEpisode = new Episode( episodeSeason, episodeImage, episodeTitle, episodeNum, episodeDate, episodeDesc );

        theEpisode.mount();

        console.log( 'mounted...' );
    } ) )








