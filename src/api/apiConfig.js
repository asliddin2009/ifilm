const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '937e7d2e42587ae702b2b0fd49d67f69',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;