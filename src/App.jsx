import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home";
import Navbar from "./components/navbar";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Details from "./pages/details";
import Myaccount from "./pages/myaccount";
import { AuthContextProvider } from "./context/authentication";
import Protectedroute from "./components/protectedroute";

import "./index.css";
function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route basename="/freeflix.com" path="/details/:id" element={<Details />} />
        <Route path="/myaccount" element={
          <Protectedroute><Myaccount /></Protectedroute>}/>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
