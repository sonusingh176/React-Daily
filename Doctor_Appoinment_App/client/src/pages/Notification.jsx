import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';

const Notification = () => {
  const {user} = useSelector((state)=>state.user);
  
  console.log(user)
  return (
    <div>

      <div className='p-2 text-center'>
        <h2 >Notification Page </h2>
      </div>

      <hr/>
      
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="unread" title="Unread">
        {
          user.notifications
          
        }
      </Tab>
      <Tab eventKey="read" title="Read">
        Tab content for Profile
      </Tab>
    
    </Tabs>
    </div>
  )
}

export default Notification