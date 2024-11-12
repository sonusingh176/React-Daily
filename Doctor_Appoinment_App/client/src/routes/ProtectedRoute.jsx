import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { setUser } from '../redux/features/userSlice';
import { useEffect } from 'react';

export default function ProtectedRoute({children}){

    const dispatch = useDispatch();
    const {user} =useSelector(state =>state.user);

    const fetchUser =async()=>{
        try {
            dispatch(showLoading());
            const res= await axios.post('/api/users/getAuthUser',
                 {token:localStorage.getItem('hosp_token')},
                 {
                headers:{
                  Authorization : 'Bearer ' + localStorage.getItem('hosp_token'), // Adding the space after 'Bearer'
                }
              })
            dispatch(hideLoading());
            if(res.data.success){
                dispatch(setUser(res.data.data));

            }else{
              // Clear token if user is not authorized
              localStorage.removeItem('hosp_token');
            }

        } catch (error) {
            console.log(error)
            localStorage.removeItem('hosp_token');
            dispatch(hideLoading());
        }
    }

    useEffect(()=>{
        if(!user && localStorage.getItem('hosp_token')){
            fetchUser();
        }
    },[user])

    if(localStorage.getItem("hosp_token")){
        return children;
    }else{
        return <Navigate to="/login" />
    }

}
