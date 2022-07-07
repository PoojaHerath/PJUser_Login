import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Signup from "./Auth/SignUp";

function App() {
  return (
    <div className="App">
      <h1> </h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;


/* <div className='w-full h-20 bg-black'>
<div className='flex flex-row justify-between text-white '>
<div className='text-5xl px-5'>Hello</div>
<div className='text-5xl '>Hello</div>
</div>*/

/*<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleEmail0" class="form-label inline-block mb-2 text-gray-700">Email</label>
    <input
      type="email"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleEmail0"
      placeholder="Enter your Email"
    />
  </div>
</div>*/