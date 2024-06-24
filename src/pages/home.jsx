import "../index.css";
import Slideshow from "../components/slideshow";
import requests from "../request";
import MovieRender from "../components/contents/movieRender";

const Home = () => {
  return (
    <>
    <Slideshow />
    <MovieRender contentID='1' title='Up Comming' fetchURL={requests.requestUpcoming} />
    <MovieRender contentID='2' title='TVSeries' subtitle='' fetchURL={requests.requestTVPopular}/>
    <MovieRender contentID='3' title='Horror' subtitle='' fetchURL={requests.requestHorror}/>
    <MovieRender contentID='4' title='Comedy' subtitle='' fetchURL={requests.requestComedy}/>
    <MovieRender contentID='5' title='Documentaries' subtitle='' fetchURL={requests.requestDocumentaries}/>
    <MovieRender contentID='6' title='Recent Updated' subtitle='' fetchURL={requests.requestNowPlaying}/>
    <MovieRender contentID='7' title='Romance' subtitle='' fetchURL={requests.requestRomance}/>
    <MovieRender contentID='8' title='TVTopRated' subtitle='' fetchURL={requests.requestTVTopRated}/>
    <MovieRender contentID='9' title='TVTrending' subtitle='' fetchURL={requests.requestTVTrending}/>
    <MovieRender contentID='10' title='TVPopular' subtitle='' fetchURL={requests.requestTVPopular}/>
    </>
      
  )
}

export default Home