import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainSuperAccordion from '../components/MainSuperAccordion'
import AddMainCategory from '../components/AddMainCategory'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MainCategoryLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
      <Grid item xs={4}>
        <Item><MainSuperAccordion/></Item>
      </Grid>
      <Grid item xs={12}>
        <Item><AddMainCategory/></Item>
      </Grid>
    </Grid>
  </Box>

  )
}

export default MainCategoryLayout