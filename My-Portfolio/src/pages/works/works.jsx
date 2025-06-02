import {useState} from 'react'
import machinery from "../../assets/machinery.png";
import macotics from "../../assets/macotics.png";
import sage from "../../assets/sage.png"
import asha from "../../assets/asha.png" 
import Cards from '../../components/Cards/Cards';

const cardData = [
  {
    image: machinery,
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tags: ["photography", "sunset", "travel"],
  },
  {
    image: macotics,
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tags: ["photography", "sunset", "travel"],
  },
]

const works = () => {

   const [showTechSection, setShowTechSection] = useState(true);

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
         <div className="flex justify-center gap-4 mb-8">
           <button
             className={`px-6 py-2 rounded font-medium ${
              showTechSection
                 ? "bg-red-600 text-white"
                 : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
             }`}
             onClick={() => setShowTechSection(true)}
           >
            MERN
           </button>
   
           <button
             className={`px-6 py-2 rounded font-medium ${
               !showTechSection
                 ? "bg-red-600 text-white"
                 : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
             }`}
             onClick={() => setShowTechSection(false)}
           >
             PHP/Laravel
           </button>
         </div>
   
         {/* Content Section */}
         <div className="flex flex-col md:flex-row items-center gap-8">
          
      {
        cardData.map((card,index)=>(
          <Cards 
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            tags={card.tags}/>
        ))
      }
         
         </div>
       </div>
  )
}

export default works