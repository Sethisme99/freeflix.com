import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../index.css";

const YOUTUBE_API_KEY = 'AIzaSyARcJfGWQCK5sM2J_xGWFlkoizVKK-jgHI'; // YouTube API key

const Details = () => {

  const location = useLocation();
  const { item } = location.state;
  const [trailerUrl, setTrailerUrl] = useState('');
  const [trailerDetails, setTrailerDetails] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const searchParams = {
          part: 'snippet',
          maxResults: 1,
          q: `${item.title || item.name} trailer`,
          key: YOUTUBE_API_KEY,
          type: 'video',
        };

        console.log('Search Params:', searchParams); // Log the search parameters

        const searchResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', { params: searchParams });

        console.log('Search Response:', searchResponse); // Log the search response

        if (searchResponse.data.items.length > 0) {
          const trailerId = searchResponse.data.items[0].id.videoId;
          setTrailerUrl(`https://www.youtube.com/embed/${trailerId}`);

          // Fetch trailer details
          const detailsParams = {
            part: 'snippet,contentDetails,statistics',
            id: trailerId,
            key: YOUTUBE_API_KEY,
          };

          console.log('Details Params:', detailsParams); // Log the details parameters

          const detailsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', { params: detailsParams });

          console.log('Details Response:', detailsResponse); // Log the details response

          if (detailsResponse.data.items.length > 0) {
            setTrailerDetails(detailsResponse.data.items[0]);
          }
        } else {
          console.error('No trailer found');
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [item.title]);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-60"
          src={`https://image.tmdb.org/t/p/w1280/${item?.backdrop_path || item?.img}`}
          alt={item.title}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center top-20">
        {/* Top Section with Play Button */}
        <div className="w-full max-w-6xl flex flex-col items-center text-center space-y-6 mb-12">
          <img
            className="w-48 h-auto rounded-md shadow-lg"
            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path || item?.poster}`}
            alt={item.title}
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{item.title}</h1>
          <div className="flex space-x-4">
            <button className="bg-red-600 px-6 py-2 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-red-700 transition duration-300">
              Play
            </button>
          </div>
        </div>

        {/* Video Player Section */}
        {trailerUrl && (
          <div className="w-full h-full max-w-6xl mb-12">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[300px]"
                src={trailerUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Trailer Details Section */}
        {trailerDetails && (
          <div className="w-full max-w-6xl bg-gray-800 rounded-md p-6 space-y-4 shadow-lg">
            <h2 className="text-3xl font-semibold">{trailerDetails.snippet.title}</h2>
            <p><span className="font-bold">Channel:</span> {trailerDetails.snippet.channelTitle}</p>
            <p><span className="font-bold">Published:</span> {new Date(trailerDetails.snippet.publishedAt).toLocaleDateString()}</p>
            <p className=' overflow-clip'><span className="font-bold">Description:</span> {trailerDetails.snippet.description}</p>
            <p><span className="font-bold">Views:</span> {trailerDetails.statistics.viewCount}</p>
            <p><span className="font-bold">Likes:</span> {trailerDetails.statistics.likeCount}</p>
          </div>
        )}
      </div>
    </div>
  );

}

export default Details