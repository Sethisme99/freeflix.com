import Savedshow from "../components/savedshow";

const Myaccount = () => {

  return (
     <>
     <div className="w-full text-white">
     <img className="w-full h-[400px] object-cover"
     src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/f2b2e40c-8381-486d-be1b-9f7757fbf3c6/KH-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backgound" />
     <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
     <div className="absolute top-[20%] p-4 md:p-8">
       <h1 className="text-3xl md:text-5xl font-bold">Saved Shows</h1>
     </div>
     </div>
     <Savedshow />
   </>
  )
}

export default Myaccount