import React from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


const BottomNavbar = () => {

    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <Box sx={{ width: 500 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: 'block', sm: 'block', md:'none'} }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default BottomNavbar
