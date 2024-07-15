import BlogCard from "../components/BlogCard";
import blogData from "../data";
import { useOutletContext } from "react-router-dom";

const HomeScreen =() =>{
    const {isLogged,setLogged} =useOutletContext();
console.log(isLogged,"Home")

    return(
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px'  }}>
        {
            blogData.map((blog,index)=>(
                <BlogCard
                key={index}
                title={blog.title}
                image={blog.image}
                text={blog.text}
                likes={blog.likes}
                comments={blog.Comment}
                isLogged={isLogged}/>
            ))
        }
       
        </div>
    )
}

export default HomeScreen;