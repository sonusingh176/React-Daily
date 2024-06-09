
import sonupng from '../Assets/sk14.png'
import bgimg from '../Assets/profile-img.png'
import './home.scss'
import { useTheme } from '../../context/ThemeContext';

import {Terminal,LinkedIn,WhatsApp} from '@mui/icons-material';

const Home = () => {

  
  const { theme, toggleTheme } = useTheme();// Use useTheme hook to access theme context

  const handleChange=(category)=>{

    switch (category) {
      case 'f':
        window.open(`https://replit.com/@sonu-kumarkuma7/WEB20-Z`,'_blank')
        
        break;
      case 'w':
        window.open(`https://wa.me/9771010903?text=Hi!   `,'_blank');
        break;

      case 'l':
        window.open(`https://www.linkedin.com/in/sonu-kr/`,'_blank');
        break;

      case 'r':
        window.open(`https://drive.google.com/file/d/1BJd9L_SzTTCdWOvxI6gUgfVhDk025qeN/view?usp=sharing`,'_blank')
        break;

      default:
        break;
    }
    
    // if(category==='f'){
    //   window.open(`https://www.facebook.com/profile.php?id=100004195483907`,'_blank')
    // }else if(category==='w'){
    //   window.open(`https://wa.me/9771010903?text=Hi!   `,'_blank');
    // }else if(category==='l'){
    //   window.open(`https://www.linkedin.com/in/sonu-kr/`,'_blank');

    // }else if(category==='r'){
    //   window.open(`https://drive.google.com/file/d/1BJd9L_SzTTCdWOvxI6gUgfVhDk025qeN/view?usp=sharing`,'_blank')

    // }

  }

  return (
    <div className={`home-${theme}`}>
    
      <div className='info_contain'>

          <div className='myinfo'>
            <p>Hello, my name is </p>        
            <h1 className='name'>Sonu Kr Singh</h1>
          
            <span>
              <p className='role'>I'm a</p>
              <p className='role role-style '>Front-end Developer.</p>
            </span>

            <div>
              <button className='resume-btn' onClick={()=>handleChange('r')}>RESUME</button>
            </div>

          </div>

          <div className='image_contain'>
            {/* <img src={sonupng} alt='sonu' className='myimg' /> */}
            <img src={bgimg} alt='vector_image'className='mybg'/>
          </div>

          <div className='icons'>
              <Terminal className='iconF' sx={{ fontSize: "30px" }}  onClick={()=>handleChange('f')}/>
              <WhatsApp className='iconW' sx={{ fontSize: "30px" }} onClick={()=>handleChange('w')}/>
              <LinkedIn className='iconL' sx={{ fontSize: "30px" }} onClick={()=>handleChange('l')}/>      
            </div>

      </div>

  <h5 className='footer-msg'>Work in progress...</h5>
    </div>
  )
}

export default Home