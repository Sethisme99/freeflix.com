import { useState } from "react"
import {UserAuth} from "../context/authentication"
import {useNavigate} from "react-router-dom"

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

async function handleSubmit(e){
    e.preventDefault()
    setError('')
    try{
      await logIn(email, password)
      navigate("/")
    }catch (error){
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <>
    <div className="w-full h-screen">
    <img className="hidden sm:block absolute w-full h-full object-cover"
     src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/f2b2e40c-8381-486d-be1b-9f7757fbf3c6/KH-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backgound" />
    <div className="bg-black/40 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50">
     <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
       <div className="max-w-[320px] mx-auto py-16">
         <h1 className="text-3xl font-bold">Sign In</h1>
         {error ? <p className="p-3 bg-red-400 m-2">Worng Password</p> : null}
         <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
           <input onChange={(e)=>setEmail(e.target.value)} className="p-3 my-2 bg-gray-800 rounded" type="email" placeholder="Email Or Phone number" autoComplete="email" />
           <input onChange={(e)=>setPassword(e.target.value)} className="p-3 my-2 bg-gray-800 rounded" type="password" placeholder="Password" autoComplete="current-password" />
           <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
           <div className="flex justify-between items-center text-sm text-gray-300">
             <p><input type="checkbox" className="mr-2" />Remember me</p>
             <a href="/">Need Help?</a>
           </div>
           <p className="py-4 text-gray-300">New to Netflix? <a className="text-white" href="/SignUp">Sign Up</a></p>
         </form>
       </div>
     </div>
    </div>
    </div>
    </>
  )

}

export default SignIn