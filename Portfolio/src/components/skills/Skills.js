import React, { useEffect, useState } from 'react'
import "./skills.scss"
import html from '../Assets/html.png'
import css from '../Assets/css3.png'
import bootstrap from '../Assets/bootstrap.png'
import javascript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import express from '../Assets/express.png'
import redux from '../Assets/redux.png'
import mongodb from '../Assets/mongodb.png'
import sql  from '../Assets/sql.png'
import php from '../Assets/php.png'
import github from '../Assets/github.png'
import mi from '../Assets/Mi.png'
import linux from '../Assets/linux.png'
import { getAccordionDetailsUtilityClass } from '@mui/material'




const techlan=[
                {
                  skillImg:html,
                  name:'html'
                },
                {
                  skillImg:css,
                  name:'css'
                },
                {
                  skillImg:bootstrap,
                  name:'bootstrap'
                },
                {
                  skillImg:javascript,
                  name:'javascript'
                },
                {
                  skillImg:react,
                  name:'react'
                },
                  {
                    skillImg:express,
                  name:'express'
                },
                {
                  skillImg:redux,
                  name:'redux'
                },
                {
                  skillImg:mongodb,
                  name:'mongodb'
                },
                
                {
                  skillImg:php,
                  name:'php'
                },
                
                {
                  skillImg:sql,
                  name:'sql'
                },
                
                {
                  skillImg:github,
                  name:'github'
                },
                {
                  skillImg:mi,
                  name:'material ui'
                },
                {
                  skillImg:linux,
                  name:'linux'
                }
                
            ];




const Skills = () => {


  const [filterSkill,setfilterSkill]=useState([]);

  const frontend=['html','css','bootstrap','react','redux','material ui','github','linux'];
  const backend=['node','express','mongodb','php','sql','linux','github'];

  const getData=(category)=>{
     console.log(category)
     if(category==='all'){

    setfilterSkill(techlan);


     }else{
      const skillfilter=techlan.filter(elem=>category.includes(elem.name))
    console.log(skillfilter,"filter");
    setfilterSkill(skillfilter);


     }
    
  }

  useEffect(()=>{
    getData('all')
  },[])

  const handleClick=(category)=>{
    
    getData(category)
  }


  return (
    <div className='skill-wrapper'>
      <header>
        <h2>
          <span>My</span>
          <span  className='skill-heading skill-text'>Techinical</span>
          <span>skills</span>
        </h2>
      </header>



      <div className='skill-btn-wrapper'>
      <button className='btn-skill-style' onClick={()=>handleClick('all')}>All</button>
        <button className='btn-skill-style' onClick={()=>handleClick(frontend)}>Frontend</button>
        <button className='btn-skill-style btn-expe' onClick={()=>handleClick(backend)}>Backend</button>
      </div>

      <div className='skill-card'>
      <div  className='lang-style'>
      {
        //   techlan.map((e)=>console.log(e.skill))
          
        filterSkill.map((e)=>
      
           <div className='skill-grid'>
           <img src={e.skillImg} alt='skills' className='style-skill'/>
               <h4 className='skill-name'>{e.name}</h4>
         
           </div>
             
           
           )
            
         }
       
      </div>

      </div>



    </div>
  )
}

export default Skills