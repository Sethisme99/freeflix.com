//API key from movieDB
const key = 'ab21618f91e46f1069d6c2f7e230539c'
//movie we want:
const requests = {
     requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
     requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
     requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
     requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=27&page=1`,
     requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
     requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=28&page=1`,
     requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=35&page=1`,
     requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=10749&page=1`,
     requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=99&page=1`,
     requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
     requestTVPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
     requestTVTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
     requestTVTrending: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`,
   };
   

export default requests