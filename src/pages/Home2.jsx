import React from 'react'
import { Navbar } from '../components/navbars';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BottomNavbar from '../components/navbars/BottomNavbar';

import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    AppBar: { backgroundColor:"white" }, 
    label: {}, 
  });

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home2 = () => {
    const styles = useStyles();
    return (
        <>
            <Navbar/>
            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'none', md:'block'} }}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'none', md:'block'} }}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box> */}
            <BottomNavbar/>
        </>
    )
}

export default Home2
