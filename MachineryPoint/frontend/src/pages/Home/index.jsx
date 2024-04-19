import {Helmet} from "react-helmet";
import pageMetadata from "../../assets/metadata"
import Heroslider from '../../components/Banner'
 import Aboutslider from '../../components/Aboutslider'
 import Product from '../../components/Product'

import Textdesign from '../../components/Textdesign'
import Categories from "../../components/Categories";
import Location from "../../components/Location";

const Home = () => {
  const metadata=pageMetadata('home');
  return (
    <>
       
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
      </Helmet>

      <Heroslider />
      <Aboutslider />
     
      <Textdesign
       txt="our"
        text=" BELIEVE IN"
        imageSrc="assets/img/we-believe-in.png"
      />
  

      <section id="skills" className="skills" style={{paddingTop:'0px'}}>
      <div className="container">

        <div className="section-title" style={{paddingBottom:'0px'}}>
          
          <p style={{textAlign:'center', fontSize:'30px'}}>OUR <span style={{color:'black'}}>PRODUCT</span> </p>
        </div>

        <div className="row mt-0">
                  <Product/>
        </div>


      </div>
      </section>

      <Textdesign
       txt="our"
        text="SUPPORT & SERVICE"
        imageSrc="assets/img/we-believe-in.png"
      />

      <Categories/>

      <Textdesign
        txt="We"
        text="are Present In"
      
      />

<Location/>
      

   



      
      
       
    
    </>
      
        
  
        
  )
}

export default Home