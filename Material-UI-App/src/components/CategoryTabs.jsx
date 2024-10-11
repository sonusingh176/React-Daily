import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddMainCategory from './AddMainCategory';
import AddSuperCategory from './AddSuperCategory';
import MainCategoryLayout from '../menu-item/MainCategoryLayout';


export default function CategoryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
   
  };

  // Map each tab index to a component
  const tabComponents = {
    0: <MainCategoryLayout/>,
    1: <AddSuperCategory />,
    2: <div>Add Product Details Component Placeholder</div>, // Replace with actual component
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Add Main Categories" />
        <Tab label="Add Product Categories" />
        <Tab label="Add Product Details"/>
      </Tabs>

        {/* Render the active component */}

        <Box sx={{ mt: 2 }}>
        {tabComponents[value]}
      </Box>



    </Box>
  );
}
