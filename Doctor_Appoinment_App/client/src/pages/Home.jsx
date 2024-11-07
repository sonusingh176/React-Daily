import axios from "axios"
import { useEffect } from "react";
import { toast } from "react-toastify";


const Home = () => {

  const getUserData = async () => {
    const token = localStorage.getItem('hosp_token');
    if (!token) {
      console.log("Token not found!");
      return;
    }
   
    try {
        const res= await axios.post('/api/users/getAuthUser', {},{
          headers:{
            Authorization : 'Bearer ' + token, // Adding the space after 'Bearer'
          }
        })
        console.log(res);
    } catch (error) {
      toast.error(error?.response?.data.message || error.message);
      console.error(error);
    }
  }

  useEffect(()=>{
    getUserData();
  },[]);

  return (
    <div>Home</div>
  )
}

export default Home