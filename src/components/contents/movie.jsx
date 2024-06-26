import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../../context/authentication';
import {db} from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Movie = ({item}) => {

  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const {user} = UserAuth()
  const navigate = useNavigate();

  const movieID = doc(db, 'users', `${user?.email}`)

  const savedShows = async () => {
     if (user?.email) {
       setLike(!like);
       setSaved(true);
       console.log("Backdrop Path:", item.backdrop_path); // Debug log
       await updateDoc(movieID, {
         savedShows: arrayUnion({
           id: item.id,
           title: item.title || item.name,
           img: item.backdrop_path,
           poster: item.poster_path,
           overview: item.overview,
         }),
       });
     } else {
       alert('Please Log in to save a movie');
     }
   };
   

  const goToDetails = () => {
     navigate(`/details/${item.id}`, { state: { item } });
   };

  return (
     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
     <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title || item?.name} />
     <div className='absolute top-0 left-0 w-full h-full text-white'>
          <p onClick={goToDetails} className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center flex-col gap-1 select-none hover:bg-black/80 opacity-0 hover:opacity-100'>
          <span className='text-[10px] font-normal text-red-400'>Double click to play</span>{item?.title || item?.name}</p>
          <p onClick={savedShows}>
               {/*this mean if like is true show hearth if false show regheart*/}
               {like ? <FaHeart className='absolute top-4 left-4 text-gray-300 font-bold' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
          </p>
     </div>
</div>
  )
}

export default Movie