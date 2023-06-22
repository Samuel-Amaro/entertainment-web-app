export type PropsIcon = {
    className?: string;
};

export type Movie = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type TV = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
};

export type DataResponseMovies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type DataResponseTV = {
    page: number;
    results: TV[];
    total_pages: number;
    total_results: number;
};

export type DataResponseSearchMulti = {
    page: number;
    results: (Movie | TV)[];
    total_pages: number;
    total_results: number;
};

export type DataResponseNowPlayingMoviesOrUpcoming = {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type DatasDetailsMovie = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number; 
        logo_path: string; 
        name: string; 
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string; 
        iso_639_1: string; 
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type DetailsTvSeries = {
    adult: boolean;
    backdrop_path: string;
    created_by: {
        id: number;
        credit_id: string;
        name: string;
        gender: number;
        profile_path: string;
    }[];
    episode_run_time: number[];
    first_air_date: string;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
    };
    name: string;
    next_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
    };
    networks: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number;
    }[];
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
};

export type Cast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

export type Crew = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
};

export type ResponseCredits = {
    id: number;
    cast: Cast[];
    crew: Crew[];
};

export type Language = {
    iso_639_1: string;
    english_name: string;
    name: string;
};

export type ResponseLanguages = Language[];

export type Video = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export type ResponseVideo = {
    id: number;
    results: Video[];
};

export type Genre = {
    id: number;
    name: string;
};

export type ResponseGenres = {
    genres: Genre[];
};

export type ResponsePaginationMoviesByGenre = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type ResponsePaginationTVSeriesByGenre = {
    page: number;
    results: TV[];
    total_pages: number;
    total_results: number;
};

export type TypeSearchFor = "movie" | "tv" | "multi";


export type ResponseReleaseDateAndCertificationMovie = {
    id: number;
    results: {
        iso_3166_1: string;
        release_dates: {
            certification: string;
            descriptors: string[];
            iso_639_1: string;
            note: string;
            release_date: string;
            type: number;
        }[];
    }[];
};

export type ResponseContentRatings = {
    results: {
        descriptors: string[];
        iso_3166_1: string;
        rating: string;
    }[];
    id: number;
};