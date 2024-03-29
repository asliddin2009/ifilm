import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getMoviesList: async (type, params) => {
        const url = 'movie/' + movieType[type];
        return await axiosClient.get(url, params);
    },
    getTvList: async (type, params) => {
        const url = 'tv/' + tvType[type];
        return await axiosClient.get(url, params);
    },
    getVideos: async (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return await axiosClient.get(url, {params: {language: 'en'}});
    },
    search: async (cate, params) => {
        const url = 'search/' + category[cate];
        return await axiosClient.get(url, params);
    },
    detail: async (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return await axiosClient.get(url, params);
    },
    credits: async (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return await axiosClient.get(url, {params: {}});
    },
    similar: async (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return await axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;