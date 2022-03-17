import axiosClient from "./axiosClient";


export const catalog = {
    movie: 'movie',
    tv: 'tv'
}

export const type = {
    popular: 'popular',
    upcoming: 'upcoming',
    topRated: 'top_rated',
    onTheAir: 'on_the_air'
}


const listApi = {
    getList: (catalog, type, params) => {
        const url = catalog + '/' + type;
        return axiosClient.get(url, { params })
    },

    getTrending: (params) => {
        const url = 'trending' + '/all' + '/week';
        return axiosClient.get(url, { params })
    },

    getSearch: (catalog, params) => {
        const url = 'search/' + catalog;
        return axiosClient.get(url, { params })
    },

    getDetail: (catalog, id, params) => {
        const url = catalog + '/' + id;
        return axiosClient.get(url, { params })
    },

    getCast: (catalog, id, params) => {
        const url = catalog + '/' + id + '/credits';
        return axiosClient.get(url, { params })
    },
    getTrailer: (catalog, id, params) => {
        const url = catalog + '/' + id + '/videos';
        return axiosClient.get(url, { params })
    },

    getSimilar: (catalog, id, params) => {
        const url = catalog + '/' + id + '/similar';
        return axiosClient.get(url, { params })
    }
}

export default listApi;