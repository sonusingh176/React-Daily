import {useState} from 'react'
import machinery from "../../assets/machinery.png";
import macotics from "../../assets/macotics.png";
import sage from "../../assets/sage.png"
import asha from "../../assets/asha.png" 
import Cards from '../../components/Cards/Cards';
import TechButton from '../../components/TechButtons/TechButton';

const techs = [
  "All",
  "PHP/Laravel",
  "MERN",
  "React",
  "Templates",
];

const cardData = [
  {
    image: machinery,
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech:"PHP/Laravel" ,
  },
  {
    image: macotics,
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech:"PHP/Laravel",
  },
  {
    image: asha,
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech:"MERN",
  },

  {
    image: sage,
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech: "Templates",
  },
  
]



const works = () => {

  const [selectedTech, setSelectedTech] = useState("All");

  //filter login
  const filtercards = selectedTech === "All" ? cardData : cardData.filter((card)=>card.tech === selectedTech);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
         {/* Heading */}
         <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-semibold">
           My{" "}
             <span className="text-red-500 font-bold">Creative</span> Portfolio{" "}
             <span className="text-red-500 font-bold">Section</span>
           </h2>
         </div>
   
         {/* Buttons */}
         
         <div className='text-center mb-5'>
         {techs.map((tech,index) => (
          <TechButton
            key={index}
            name={tech}
            isActive={selectedTech === tech}
            onClick={() => setSelectedTech(tech)}
          />
        ))}
         </div>
        
        
   
         {/* Content Section */}
         <div className="flex flex-col md:flex-row items-center gap-8">
          
      {
        filtercards.map((card,index)=>(
          <Cards 
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tech={card.tech}/>
        ))
      }
         
         </div>
       </div>
  )
}

export default works