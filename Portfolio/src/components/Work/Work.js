import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import './work.scss'
import { useEffect ,useState} from 'react'
//  import data from './project.json'





const Work = () => {

  const [filterprojectData,setfilterprojectData]=useState([])

  const getData=(category)=>{
    
    //  Public folder: If the JSON file is part of your project's static assets and doesn't require any processing or manipulation during runtime, 
    // you can place it in the public folder of your React project.
    //  You can access it in your code using its relative URL, e.g., fetch('/data.json').

   fetch('./project.json')
    
    .then(response=> response.json())
    .then(data=>{
      if(category==='all'){
        setfilterprojectData(data)
      }else{
        const newdata=data.filter(item=>item.tech===category)
        setfilterprojectData(newdata)

      }
    
      // const jsonData=JSON.parse(data)
     
    })
  }
  

  useEffect(()=>{
    // console.log(category,"useeff")
    getData('all')
  },[])


 const  handleButtonClick=(category)=>{
  getData(category)
  
 }




  // useEffect(()=>{
  //   async function fetchData(){
  //     const response=await fetch('./project.json');
  //     const json=await response.json();
  //     console.log(json)
  //   }
  //   fetchData();
  // },[])


  // fetch(project)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));



  return (
    <div className='work-wrapper'>

      <div className='work-container'>
        <h2>
          <span className='work-heading work-text'>My</span>
          Creative
          <span className='work-heading'>Portfolio</span>
          Section
        </h2>
      </div>

      <div className='work-btn-wrapper'>
        <button className='btn-work-style' onClick={()=>handleButtonClick('all')}>All</button>
        <button className='btn-work-style btn-expe ' onClick={()=>handleButtonClick('react')}>React</button>
        <button className='btn-work-style btn-expe ' onClick={()=>handleButtonClick('mern')}>MERN</button>
        <button className='btn-work-style btn-expe ' onClick={()=>handleButtonClick('javascript')}>JS</button>
        
      </div>


      <div className='work-card-container'>

      {
      filterprojectData.map((e,i)=>{
        console.log(e)
        
      
        return( 
       
          <Card sx={{ maxWidth: 345 }} key={i} className='work-card-style'>
          <CardMedia
            sx={{ height: 160 ,backgroundColor:"red" }}
            image={e.image}
            title="hkjhkh"

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='project-name'>
              {e.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {e.about}
            </Typography>
            <div className='gitNet'>
            <VisibilityIcon className='netlify-work' />
            <GitHubIcon className='github-work' />

            </div>
      
      
            

          </CardContent>
          
           
          
          
        </Card>
      
        )
      })

    }


      </div>
    
   


    </div>
  )
}

export default Work