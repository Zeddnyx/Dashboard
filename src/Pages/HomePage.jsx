import React, { useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { appContext } from "../context/context";

export default function Homepage() {
  const { user } = appContext();
  const navigate = useNavigate()
  return (
    <div>
      {user
      ? navigate("/dashboard/homepage")
      : (
        <section className='text-center'>
          <div>
            <h1>A Simply Dashboard App</h1>
          </div>
          <Link to="sign">
            <button type="button" className="p-2 px-4 mt-5 bg-bgNav text-text ">
              Sign in
            </button>
          </Link>
        </section>
      )}
    </div>
  );
}
