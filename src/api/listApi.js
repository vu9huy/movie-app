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

    // getCast: (catalog, params) => {
    //     const url = '/search' + catalog;
    //     return axiosClient.get(url, { params })
    // },

    // getSimilar: (params) => {
    //     const url = '/tv' + '/popular';
    //     return axiosClient.get(url, { params })
    // }
}

export default listApi;