// import React from 'react'

const pageMetadata = (pageName) => {
    switch (pageName) {
        case 'home':
            return{
                title:'Home Page',
                description :'This is home page',
            };
            
        case 'about':
            return{
                title:'About Page 2',
                description :'This is about page 2',
            }
    
        default:
            return{
                title: 'Your Default Title',
                description: 'Your default description',
            }         
    }
}

export default pageMetadata