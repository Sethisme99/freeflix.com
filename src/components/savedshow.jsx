import { useState, useEffect } from 'react';
import { UserAuth } from '../context/authentication';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Savedshow = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const navigate = useNavigate();

  // Scroll functions
  const slideLeft = () => {
    var Slider = document.getElementById('slider');
    Slider.scrollLeft = Slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var Slider = document.getElementById('slider');
    Slider.scrollLeft = Slider.scrollLeft + 300;
  };

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(doc(db, 'users', user.email), (doc) => {
        setMovies(doc.data()?.savedShows || []);
      });
      return () => unsubscribe();
    }
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl py-4">My Show</h2>
      <div className='relative flex items-center group px-2'>
        <MdChevronLeft size={40} className='bg-white select-none rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block'
          onClick={slideLeft} />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth'>
          {movies.map((item, id) => {
            const goToDetails = () => {
              navigate(`/details/${item.id}`, { state: { item } });
            };
           

            return (
              <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full text-white'>
                  <p onClick={goToDetails} className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center flex-col gap-1 select-none hover:bg-black/80 opacity-0 hover:opacity-100'>
                    <span className='text-[10px] font-normal text-red-400'>Double click to play</span>{item?.title}
                  </p>
                  <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight size={40} className='bg-white select-none rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block'
          onClick={slideRight} />
      </div>
    </>
  );
};

export default Savedshow;
