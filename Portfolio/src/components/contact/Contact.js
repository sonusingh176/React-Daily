import React from 'react'
import './contact.scss'
import contactimg from '../Assets/contactImg.jpg'


//Material Ui Import

import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box, margin } from '@mui/system';
import Container from '@mui/material/Container';
//======================================================

const Contact = () => {

  /*window.open() is a method in JS that allows you to open a new browser window or Tab with a specified URL*/
  /*it can also accept other parameters to customize the behavior of the window, such as its size,position,
      and whether it should be resizable or not */
  /* '_blank'  :- this specifies that the link should be opened in a new tab*/

  const handleLinkedIn=()=>window.open(`https://www.linkedin.com/in/sonu-kr/`,'_blank','width=600 ,height=600,resizable=yes')
  const handleGmail=()=>window.open(`mailto:sonusingh82601@gmail.com`,'_blank','width=400 ,height=500,resizable=yes')
  const handlegit=()=>window.open(`https://github.com/sonusingh176`)
  

 return (
    <div className='contact-wrapper'>

      <div className='box1-contact'>
        <h2>
          Take A 
          <span>Coffee</span>
          And 
          <span>Chat</span>
          With Me
        </h2>
      </div>

      <div className='box2-contact'>
      <Container  className='contactimage-container'>
        <img src={contactimg} alt='contactImg' className='contact-Img'/>
      </Container>
      

      </div>

      <div className='box3-contact'>
      
        <Stack direction="row" spacing={3} sx={{ width: '50%', margin:'auto',paddingTop:'20px' }} className='stackIcon'>
        
            <Chip label="LinkedIn" onClick={handleLinkedIn}  icon={<LinkedInIcon />}  color="primary" className='linkedin'/>
            <Chip label="GitHub" onClick={handlegit}icon={<GitHubIcon/>}  color="warning" className='github'/>
            <Chip label="Gmail" onClick={handleGmail} icon={<MailIcon/>} color="primary"  className='gmail'/>
        </Stack>
    
        <Box sx={{ width: '50%', margin:'auto',paddingTop:'20px' }}  className='formBox'>
          <Stack spacing={2}>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Mobile" variant="outlined" />

              <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="your message"
              />
            
              <Button  color="error" variant="contained" endIcon={<SendIcon />}>
              Send Message
              </Button>
          </Stack>
        </Box>
      
      </div>

    </div>
  )
}

export default Contact