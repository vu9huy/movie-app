

const apiConfig = {
    baseApi: 'https://api.themoviedb.org/3/',
    apiKey: 'afae315fe6d4950db31c5037e3d96576',
    originImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}
export default apiConfig;