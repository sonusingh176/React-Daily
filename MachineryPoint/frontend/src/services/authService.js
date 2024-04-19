
import axios from 'axios';

export const handleLogin = async(values) => {

    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', values);
        console.log(response.data)
        return response.data; 
      } catch (error) {
        console.log(error);
      }
      
 
}

