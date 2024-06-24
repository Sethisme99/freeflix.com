import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import requests from '../request';
import "../index.css";

const Slideshow = () => {
     const [movies, setMovies] = useState([]);
     const [currentMovie, setCurrentMovie] = useState(null);
     const [animationClass, setAnimationClass] = useState('');
     
     //for API:
     useEffect(() => {
          axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
          }).catch(error => {
            console.error("There was an error fetching the movies!", error);
          });
     }, [])
     
     //test if it is work
     //console.log(movie)
     
     //make movie random:
     useEffect(() => {
          if (movies.length > 0) {
            // Initial delay before starting the interval
            const initialTimeout = setTimeout(() => {
              const interval = setInterval(() => {
                setAnimationClass('animate-swipe-out');
                setTimeout(() => {
                  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                  setCurrentMovie(randomMovie);
                  setAnimationClass('animate-swipe-in');
                }, 500);
              }, 10000);
      
              // Clear the interval on component unmount
              return () => clearInterval(interval);
            }, 0); // 10 seconds initial delay
      
            // Clear the initial timeout on component unmount
            return () => clearTimeout(initialTimeout);
          }
        }, [movies]);
     
     
     return (
          <div className='w-full h-[500px] lg:h-[1000px] text-white relative overflow-hidden'>
               <div className={`${animationClass} w-full h-full absolute inset-0`}>
                    <div className='absolute w-full h-[1000px] bg-gradient-to-r from-black'></div>
                    <img className=' w-full h-full object-cover object-top' 
                     src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`} alt={currentMovie?.title} />
               </div>
               <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold animate-bounce'>{currentMovie?.title}</h1>
               <div className='my-4'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-transparent hover:text-white'>Play</button>
                    <button className='border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-red-600 hover:border-none'>Watch Later</button>
               </div>
               <p className='text-gray-400 text-sm'>Released: {currentMovie?.release_date}</p>
               <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 truncate hover:text-wrap cursor-pointer'>{currentMovie?.overview}</p>
               </div>
     
               
          </div>
       )
}

export default Slideshow