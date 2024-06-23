import React from 'react';
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>
          <form className="space-y-4 md:space-y-6" method="POST">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-field"
                placeholder="Emelia Erickson"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="input-field"
                placeholder="emelia_erickson24"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" to ="/login">Login here</Link></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sign;
