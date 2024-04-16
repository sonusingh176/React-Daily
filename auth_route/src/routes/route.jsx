import { 
     HomeContent,
     LoginPage, 
     HomePage , 
     Dashboard,
     Setting ,
     RequireAuth
    } from '../components/global';


export default[
    {
        path:'/',
        element: <HomePage/>,
        children: [
          {
            index:true,
            element: <HomeContent/>
          },

          {
            path:'/login',
            element: <LoginPage/>
          },

          {
            path:'/dashboard',
            element: <RequireAuth> <Dashboard/> </RequireAuth>
          },

          {
            path:'/setting',
            element:<RequireAuth> <Setting/> </RequireAuth> 
          },
          
        ],
    }
]