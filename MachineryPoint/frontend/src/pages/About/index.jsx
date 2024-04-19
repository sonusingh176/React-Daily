import {Helmet} from "react-helmet";
import pageMetadata from "../../assets/metadata"

import Textdesign from '../../components/Textdesign'

import Aboutslider from "../../components/Aboutslider"
import Breadcrumb from "../../components/Breadcrumb"
import Portfolio from "../../components/Portfolio";
import CoreValus from "../../components/Corevalue";
import ClientFeedback from "../../components/Clientfeedback";


const About = () => {

    const metadata=pageMetadata('about');
    
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
    <Breadcrumb name='About'/>

    <Aboutslider/>

    <Textdesign
        txt="our"
        text=" BELIEVE IN"
        imageSrc="assets/img/we-believe-in.png"
    />

    <Portfolio/>

    <Textdesign
        txt="our"
        text=" core values"
    />

    <CoreValus/>

    <ClientFeedback/>


    
   </>
  )
}

export default About