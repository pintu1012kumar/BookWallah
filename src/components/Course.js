import React from "react";
import list from "../components/list.json";
import Card from "./Cards";
import {Link} from "react-router-dom"
const Course = () => {
  console.log(list);
  console.log(list.name);

  return (
    <div>
      <div class=" text-center   pt-20 ">
        <h1 className="text-3xl font-bold">Hey everyone...</h1>
        <p className="pt-10 font-bold pl-20 pr-20">
          Today we are thrilled to launch react.dev, the new home for React and
          its documentation. In this post, we would like to give you a tour of
          the new site.React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.


        </p>

        <Link to="/" >
        <button class="px-4 py-2 bg-pink-600 text-white rounded mt-10 hover:bg-orange-600 ">
          Back
        </button>
        </Link>

        <div class="grid grid-cols-5 gap-4 mt-20  pl-20">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
