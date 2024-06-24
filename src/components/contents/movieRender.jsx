import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./movie";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import "../../index.css"

const MovieRender = ({title, fetchURL, contentID}) => {

     const [movies, setMovies] = useState([])

     useEffect(()=>{
          axios.get(fetchURL).then((response)=>{
               setMovies(response.data.results)
          })
     },[fetchURL])

     console.log(movies)
//scroll function:
const slideLeft = () =>{
     
     var Slider = document.getElementById('slider' + contentID);
     Slider.scrollLeft = Slider.scrollLeft - 300;
}

const slideRight = () =>{
     
     var Slider = document.getElementById('slider' + contentID);
     Slider.scrollLeft = Slider.scrollLeft + 300;
}

  return (
     <>

     <h2 className="text-white font-bold md:text-xl py-4">{title}</h2>
     <div className='relative flex items-center group px-2'>
          <MdChevronLeft size={40} className='bg-white select-none rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block'
          onClick={slideLeft} />
          <div id={'slider' + contentID} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hiden scroll-smooth'>
               {movies.map((item, id)=>(
                    <Movie key={id}  item={item} />
               ))}
          </div>
          <MdChevronRight size={40} className='bg-white select-none rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block' 
          onClick={slideRight}/>
     </div>
</>
  )
}

export default MovieRender