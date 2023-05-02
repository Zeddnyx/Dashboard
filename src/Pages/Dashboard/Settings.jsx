import HomeDashboard from "../HomeDashboard";
import React from "react";

export default function Settings() {
  return (
    <HomeDashboard>
      <h1 className="text-xl font-bold my-5">This Setting Page</h1>
      <p className="bg-yellow p-5">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia
        excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
        pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
        officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
        voluptate voluptate dolor minim nulla est proident. Nostrud officia
        pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
        reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia
        voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem
      </p>
      <div className="flex gap-3 w-full my-5">
        <div className="bg-bgNav rounded-xl w-full h-40"></div>
        <div className="bg-bgNav rounded-xl w-full h-40"></div>
      </div>
    </HomeDashboard>
  );
}
