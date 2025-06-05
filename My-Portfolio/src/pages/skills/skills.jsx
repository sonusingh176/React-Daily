import { useState } from "react";
import aboutBanner from "../../assets/about_banner.gif";
import html from "../../assets/html.png";
import css from "../../assets/css3.png";
import bootstrap from "../../assets/bootstrap.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import redux from "../../assets/redux.png";
import mongodb from "../../assets/mongodb.png";
import sql from "../../assets/sql.png";
import php from "../../assets/php.png";
import laravel from "../../assets/laravel.jpg";
import github from "../../assets/github.png";
import mi from "../../assets/Mi.png";
import linux from "../../assets/linux.png";

import TechButton from "../../components/TechButtons/TechButton";

const techlan = [
  {
    skillImg: html,
    name: "html",
    techo:"frontend"
  },
  {
    skillImg: css,
    name: "css",
     techo:"frontend"
  },
  {
    skillImg: bootstrap,
    name: "bootstrap",
     techo:"frontend"
  },
  {
    skillImg: javascript,
    name: "javascript",
     techo:"frontend"
  },
  {
    skillImg: react,
    name: "react",
     techo:"frontend"
  },
  {
    skillImg: express,
    name: "express",
    techo:"backend"
  },
  {
    skillImg: redux,
    name: "redux",
    techo:"frontend"
  },
  {
    skillImg: mongodb,
    name: "mongodb",
    techo:"backend"
  },

  {
    skillImg: php,
    name: "php",
    techo:"backend"
  },
  {
    skillImg: laravel,
    name: "Laravel",
      techo:"backend"
  },

  {
    skillImg: sql,
    name: "sql",
    techo:"backend"
  },

  {
    skillImg: mi,
    name: "material ui",
     techo:"frontend"
  },
  {
    skillImg: github,
    name: "github",
    techo:"tools"
  }

];
const techside=[
  "all",
  "frontend",
  "backend",
  "tools"
]

const skills = () => {
  const [selectedTech, setSelectedTech] = useState("all");

  const filtertech = selectedTech === "all" ? techlan : techlan.filter((el)=>el.techo === selectedTech)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          My <span className="text-red-500 font-bold">Techinical </span>skills{" "}
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {
          techside.map((elem,index)=>(
            <TechButton
            key={index}
            name={elem}
            isActive={selectedTech === elem}
            onClick={() => setSelectedTech(elem)}
          />
          ))
        }
      </div>

      {/* Content Section */}
      <div className="flex flex-col  flex-wrap md:flex-row items-center gap-8">
      {   
        filtertech.map((e)=>

          <div className="w-28 h-32 sm:w-32 sm:h-36 bg-white rounded-lg border-2 border-red-500 shadow-sm flex flex-col justify-between items-center p-2">
      
          {/* Fixed image container */}
          <div className="w-16 h-20 flex items-center justify-center overflow-hidden">
            <img
              src={e.skillImg}
              alt={e.name}
              className="h-full object-contain"
            />
          </div>
    
          {/* Text */}
          <p className="text-center text-sm font-medium mt-2">{e.name}</p>
        </div>
             
           
           )
            
         }
      </div>

    </div>
  );
};

export default skills;
