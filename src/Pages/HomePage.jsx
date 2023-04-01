import React from "react";
import { Link  } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <Link to="sign"><button type="button" className='p-2 bg-slate-500'>Sign in</button></Link>
    </div>
  );
}
