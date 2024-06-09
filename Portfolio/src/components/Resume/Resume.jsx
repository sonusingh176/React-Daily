import React from 'react'
import './resume.scss'
import resumeImg from '../Assets/resume.jpg';
import Button from '@mui/material/Button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Resume = () => {
  const handleclick=()=>{
    window.open(`https://drive.google.com/file/d/1BJd9L_SzTTCdWOvxI6gUgfVhDk025qeN/view?usp=sharing`,'_blank')
  }
  return (
    <div className='resume-container'>
      <div className='resume-grid-container'>
        <div>
          <img className='resumeImg' src={resumeImg} alt='sonu singh resume'/>
        </div>

        <div>
        <Button sx={{width:'100%'}} color="error" onClick={handleclick} variant="contained" endIcon={<ArrowCircleDownIcon />}>
              Download
              </Button>
          
        </div>

      </div>
      
    </div>
  )
}

export default Resume