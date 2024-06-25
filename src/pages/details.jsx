import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import "../index.css";

const Details = () => {
  const location = useLocation();
  const { item } = location.state || {};

  useEffect(() => {
    // If item exists, save it to local storage
    if (item) {
      localStorage.setItem('selectedItem', JSON.stringify(item));
    }
  }, [item]);

  // If item is not available in state, try to get it from local storage
  const savedItem = item || JSON.parse(localStorage.getItem('selectedItem'));

  if (!savedItem) {
    return (
      <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Item details not found. Please go back and select an item.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-60"
          src={`https://image.tmdb.org/t/p/w1280/${savedItem?.backdrop_path || savedItem?.img}`}
          alt={savedItem.title}
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
            src={`https://image.tmdb.org/t/p/w500/${savedItem?.poster_path || savedItem?.poster}`}
            alt={savedItem.title}
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{savedItem.title}</h1>
          <div className="flex space-x-4">
            <button className="bg-red-600 px-6 py-2 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-red-700 transition duration-300">
              Play
            </button>
          </div>
        </div>
        <div className="w-full max-w-6xl text-left mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Description</h2>
          <p className="text-lg md:text-xl leading-relaxed">{savedItem.overview}</p>
        </div>
        {/* Details Section */}
        <div className="w-full max-w-6xl bg-gray-800 rounded-md p-6 space-y-4 shadow-lg mt-6">
          <h2 className="text-3xl font-semibold">Details</h2>
          <p><span className="font-bold">Genre:</span> Drama, Sci-Fi, Adventure</p>
          <p><span className="font-bold">Release Date:</span> Dec 25, 2023</p>
          <p><span className="font-bold">Country:</span> United Kingdom</p>
          <p><span className="font-bold">Director:</span> N/A</p>
          <p><span className="font-bold">Production:</span> Bad Wolf</p>
          <p><span className="font-bold">Cast:</span> Ncuti Gatwa, Millie Gibson, Susan Twist</p>
          <p className="text-gray-400">{savedItem.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
