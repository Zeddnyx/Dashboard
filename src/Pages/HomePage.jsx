import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/context";

export default function Homepage() {
  const { user } = appContext();
  return (
    <div>
      {user ? (
        <p>udh login</p>
      ) : (
        <section className='max-w-2xl mx-auto text-center mt-20'>
          <div>
            <h1>A Simply Dashboard App</h1>
          </div>
          <Link to="sign">
            <button type="button" className="p-2 px-4 mt-5 bg-slate-500 rounded-full">
              Sign in
            </button>
          </Link>
        </section>
      )}
    </div>
  );
}
