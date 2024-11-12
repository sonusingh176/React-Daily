import { Navigate } from "react-router-dom";


export default function PublicRoute({ children }){

    console.log(children,"children public route");
    if(localStorage.getItem('hosp_token')){
        return <Navigate to="/" />
    }else{
        return children ;
    }

}

/**
 * <<<<<<< Documentation <<<<<<<
 * 
 * A React component that handles public routes.
 * It checks if a user is authenticated by checking the existence of a token in local storage.
 * If the token exists, it redirects the user to the home page.
 * If the token does not exist, it renders the children components.
 * 
 * 
 * The component's props. i.e props.children - The children components to be rendered or redirected.
 * 
 * 
 */