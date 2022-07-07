import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
   <>
<section class="py-26 bg-white">
  <div class="container px-4 mx-auto">
    <div class="max-w-lg mx-auto">
      <div class="text-center mb-8">
        <a class="inline-block mx-auto mb-6" href="#">
          <img src="nigodo-assets/logo-icon-nigodo.svg" alt=""/>

          </a>
        <h2 class="text-3xl md:text-4xl font-bold mb-2">Sign in</h2>
          </div>
      <form action="">
        <div class="mb-6">
          <label class="block mb-2 font-bold flex justify-start" for="">Email</label>
          <input class="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold flex justify-start" for="">Password</label>
          <input class="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="Use 6 digits password"/>
        </div>
        <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label for="">
              <input type="checkbox"/>
              <span class="ml-1 font-bold">Remember me</span>
            </label>
          </div>
          <div class="w-full lg:w-auto px-4"><a class="inline-block font-bold hover:underline" href="#">Forgot password?</a></div>
        </div>
        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-bold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
        <p class="text-center font-bold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline" href="#">  <Link to="signup">Sign up</Link></a></p>
      </form>
    </div>
  </div>
</section>
   </>
  );
}

export default Login;